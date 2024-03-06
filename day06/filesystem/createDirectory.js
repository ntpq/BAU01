const fs = require('fs');

fs.mkdir('new_directory',(error)=>{
    if(error) return console.error(error);
    console.log('Directory created successfully !');
})