'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the other side - Adele');
});

app.get('/api/v1/internal',(req,res)=>{
  res.send('Does it work ?');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);