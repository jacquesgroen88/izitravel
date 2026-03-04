const fs = require('fs');
const path = require('path');
const https = require('https');

function findFiles(dir, ext, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findFiles(filePath, ext, fileList);
        } else if (filePath.endsWith(ext)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const files = findFiles(path.join(__dirname, 'src'), '.tsx');
const urlRegex = /https:\/\/images\.unsplash\.com\/[^'"\s\)?]+/g;
const urls = new Set();
const urlToFile = new Map();

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
        const url = match[0];
        urls.add(url);
        if (!urlToFile.has(url)) {
            urlToFile.set(url, []);
        }
        urlToFile.get(url).push(file);
    }
}

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, ok: res.statusCode >= 200 && res.statusCode < 400, status: res.statusCode });
        }).on('error', (err) => {
            resolve({ url, ok: false, status: err.message });
        });
    });
}

(async () => {
    let output = `Found ${urls.size} unique Unsplash URLs.\n`;
    let broken = 0;
    for (const url of Array.from(urls)) {
        const result = await checkUrl(url);
        if (!result.ok) {
            output += `\nBROKEN: ${url} (Status: ${result.status})\nFound in:\n`;
            urlToFile.get(url).forEach(f => output += `  - ${f}\n`);
            broken++;
        }
    }
    output += `\n\nDone. Found ${broken} broken URLs out of ${urls.size}.\n`;
    fs.writeFileSync('test_results.txt', output);
    console.log('Finished writing test_results.txt');
})();
