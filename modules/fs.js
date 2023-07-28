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

// criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.text'), 'hello node!', (error) => {
  if (error) {
      return console.log('Error: ', error);
  }
      console.log('arquivo criado')
      //  modificar arquivo
      fs.appendFile(path.join(__dirname, '/test', 'test.text'), 'hello world!', (error) => {
        if (error) {
            return console.log('Error: ', error);
        }
            console.log('arquivo modificado')
      })
      // ler arquivo
      fs.readFile(path.join(__dirname, '/test', 'test.text'), 'utf8', (error, data) => {
        if (error) {
            return console.log('Error: ', error);
        }
            console.log(data)
      })
})
