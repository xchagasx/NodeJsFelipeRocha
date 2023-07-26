# NodeJsFelipeRocha

O que é NodeJs?
  Ambiente que permite a execução de código JavaScript Fora do navagador
  Utiliza a V8 engine(mesmo motor utilizado pelo navegador google chrome)
  É utilizado para construir APIs

Como o NodeJs funciona?
  Possui apenas um núcleo(sigle threaded)
  Suporta várias operações simultâneas(non-blocking)

Vantagens do NodeJs?
  Ótimo uso de memória(baixo custo)
  Harmonia com o front-end(ambos utilizam javaScript)
  Muito rápido, simples e escalável
  Presença extremamente forte no mercado

Módulos no NodeJs?
  Podemos criar nossos próprios módulos(nossos arquivos) e importá-los
  O NodeJs vem com módulos pré-instalados(path, fs, http etc)
  Para importer um módulo, utilizamos o commonJs:
    Ex: 
      const path = require('path');
      const meuArquivo = require('./meu-arquivo.js')

NPM - Node Package Manager
  Podemos instalar módulos de terceiros utilizando o NPM
  Esses módulos são armazenados em uma pasta chamada "node_modules"
  Um arquivo chamado "package.json" lista todos os módulos que instalamos pelo NPM

    Ex: 
      npm init // Cria o package.json
      npm install express // instala um pacote localmente
      npm -g install nodemon // instala um pacote globalmente

  
