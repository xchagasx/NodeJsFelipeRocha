const { error } = require('console');
const fs = require('fs');
const path = require('path');

//  criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
  if (error) {
    console.log('Error: ', error);
  }
  console.log('File created with sucess')
})