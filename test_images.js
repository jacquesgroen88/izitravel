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
const urlRegex = /https:\/\/images\.unsplash\.com\/[^'"]+/g;
const urls = new Set();
const urlToFile = new Map();

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
        urls.add(match[0]);
        if (!urlToFile.has(match[0])) {
            urlToFile.set(match[0], []);
        }
        urlToFile.get(match[0]).push(file);
    }
}

console.log(`Found ${urls.size} unique Unsplash URLs.`);

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            // Unsplash might redirect, so 301/302 is OK. We check if it's 200 or 3xx.
            // But let's check headers or status code
            if (res.statusCode >= 200 && res.statusCode < 400) {
                resolve({ url, ok: true, status: res.statusCode });
            } else {
                resolve({ url, ok: false, status: res.statusCode });
            }
        }).on('error', (err) => {
            resolve({ url, ok: false, status: err.message });
        });
    });
}

(async () => {
    let broken = 0;
    for (const url of Array.from(urls)) {
        const result = await checkUrl(url);
        if (!result.ok) {
            console.log(`\nBROKEN: ${url} (Status: ${result.status})`);
            console.log(`Found in:`);
            urlToFile.get(url).forEach(f => console.log(`  - ${f}`));
            broken++;
        } else {
            process.stdout.write('.');
        }
    }
    console.log(`\n\nDone. Found ${broken} broken URLs out of ${urls.size}.`);
})();
