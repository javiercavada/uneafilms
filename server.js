/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const http = require('http');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const dotenv = require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const webpackConfig = require('./webpack.config.js');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  stats: {
    colors: true
  }
});

const app = express();

/** ***********************************************************************************************\
* *
* A continuación tenemos comentado el código que habíamos intentado implementar para obtener *
* toda la información de las películas desde el server.js, utilizando la API de The Movie DB. *
* El problema es que nos ha sido imposible mostrar de esta manera las películas en el cliente, *
* por algún error que no hemos logrado localizar, nos hemos pegado bastante con ello ;( *
* Finalmente, hemos tenido que realizar la conexión con la API desde el propio cliente, para poder *
* mostrar correctamente las películas como deseabamos. *
* *
\************************************************************************************************** */

/*
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// GET RUTAS
app.get('/history/:searchTerm', (req, res) => {
  const urlString = `https://api.themoviedb.org/3/search/movie?api_key=2c934ad33805b2c2e7c6355cd9a821d5&query=${req.params.searchTerm}`;
  axios
    .get(urlString)
    .then(searchResults => {
      console.log('Fetched data successfully', searchResults);
      const { results } = searchResults;

      let toSend = [];

      results.forEach(movie => {
        // eslint-disable-next-line no-param-reassign
        movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
        // console.log(movie.poster_path)
        toSend = [...toSend, { id: movie.id, movie }];
      });
      res.send(toSend);
    })
    .catch(err => console.log(err));
});
*/

server.listen(8080, 'localhost', () => {
  console.log('Iniciando servidor en http://localhost:8080');
});
