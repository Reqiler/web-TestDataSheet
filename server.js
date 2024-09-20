const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(express.json());

const API_KEY = process.env.API_KEY;  // ดึง API Key จาก environment variables

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwUJhnsZ_GoXqzxDE0UO5PO8d_ijGgyR9STnRXo2KTTcxMV6BOs0k9R44hz6o7FmgNEKQ/exec', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}` // ใช้ API Key จาก Secrets
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            res.json(data);  // ส่งข้อมูลกลับไปที่ frontend
        } else {
            res.status(response.status).json({ error: data.error });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
