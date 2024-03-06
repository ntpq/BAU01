const fs = require('fs');

const content = 'Hello, everyone!';
 fs.writeFile('output.txt',content,'utf-8',(error=>{
    if(error) return console.error(error);
    console.log('Data written to file successfully !:');
 }))