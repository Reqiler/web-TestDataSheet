const express = require('express');
require('dotenv').config();  // ใช้เพื่อดึงค่า API Key จากไฟล์ .env หรือ GitHub Secrets

const app = express();
const PORT = 3000;

// Route สำหรับส่ง API Key ไปยัง client
app.get('/api/getApiKey', (req, res) => {
    const apiKey = process.env.API_KEY; // ดึง API Key จาก GitHub Secrets หรือไฟล์ .env
    res.json({ apiKey });  // ส่งค่า API Key กลับไป
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
