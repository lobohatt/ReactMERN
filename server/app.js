const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname,'..','build');

app.use(express.static(publicPath));

const port = process.env.PORT || 4000;

app.get('*',(req,res)=>{
  res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(port,()=>{
  console.log('server up on port '+port);
});