const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('OK v3'));
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime()
  });
});

app.listen(3000, () => console.log('running on 3000'));

