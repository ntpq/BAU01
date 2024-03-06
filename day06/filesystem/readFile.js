const fs = require('fs');
fs.readFile('example.txt','utf-8',(error,data)=>{
    if(error) return console.error(error);
    console.log('File content:',data);
});