const path = require('path');

module.exports = {
  entry: './src/index.js', //-> do ponto onde ele está agora, para a pasta src e depois para o documento index.js
  mode: "development", //-> cria um documento não compilado 
  output: { //-> porta de saída; depois que uniu o javascript, onde ele vai colocar o documento
    path: path.resolve(__dirname, 'dist'), //-> pegue o diretório que estou agora e vá para o dist 
    filename: 'bundle.js' //-> nome do arquivo 
}, 
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
        }]
    }]
  }
};
