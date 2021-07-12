'use strict';

const express = require('express');
const axios = require('axios')

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  
  res.send('Hello from the other side - ADELE');
});
const internalURL = "http://172.17.0.2:8080/api/v1/add"
app.get('/api/v1/add',async (req,res)=>{
  const payload = JSON.stringify(req.body)
  console.log("external req")
  try{
   const response = await axios.get(internalURL)
   console.log(response.data);
   res.send(response.data);
  }catch(err){
    console.log(err);
  }
  
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);