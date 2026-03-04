import express from 'express';
import { GoogleGenAI } from '@google/genai';
import Database from 'better-sqlite3';

const app = express();
app.use(express.json());

const db = new Database(':memory:');
db.exec(`
  CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role TEXT NOT NULL,
    content TEXT NOT NULL
  )
`);

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'dummy' });

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        db.prepare('INSERT INTO messages (role, content) VALUES (?, ?)').run('user', message);

        // Simulate AI response for the demo if no API key is provided
        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'dummy') {
            const response = `This is a simulated response from Google AI to: "${message}". Set GEMINI_API_KEY environment variable to use real AI model processing!`;
            db.prepare('INSERT INTO messages (role, content) VALUES (?, ?)').run('model', response);
            return res.json({ text: response });
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
        });

        db.prepare('INSERT INTO messages (role, content) VALUES (?, ?)').run('model', response.text);
        res.json({ text: response.text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate content' });
    }
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
