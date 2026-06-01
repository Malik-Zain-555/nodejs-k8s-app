const express = require('express');
const os = require('os');
const app = express();

let visitorCount = 0;

app.get('/', (req, res) => {
  visitorCount++;
  res.send(`
    <html>
      <head><title>Cloud Computing Project</title></head>
      <body style="font-family: Arial; text-align: center; padding: 50px; background: #f0f8ff;">
        <h1>🚀 Node.js on Kubernetes!</h1>
        <h2>Student: Zain Malik</h2>
        <hr/>
        <p><b>Timestamp:</b> ${new Date().toISOString()}</p>
        <p><b>Container ID:</b> ${os.hostname()}</p>
        <p><b>Visitor Count:</b> ${visitorCount}</p>
        <p><b>Node Version:</b> ${process.version}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});