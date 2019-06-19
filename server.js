/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const http = require('http');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const dotenv = require('dotenv').config();
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
// Using Body Parser Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/peliculas', (req, res) => {
  console.log('Perform search using moviedb');
  console.log(req);
  process.exit();
  /* const urlString = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.PELICULAS_API}&query=${req.searchTerm}`;
  $.ajax({
    url: urlString,
    success: searchResults => {
      console.log('Fetched data successfully');
      // console.log(searchResults)
      const { results } = searchResults;
      // console.log(results[0])

      const movieRows = [];

      results.forEach(movie => {
        movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
        // console.log(movie.poster_path)
        const movieRow = <FilasPeliculas key={movie.id} movie={movie} />;
        movieRows.push(movieRow);
      });

      this.setState({ rows: movieRows });
    },
    error: (xhr, status, err) => {
      console.error('Failed to fetch data');
    }
  });
  res.send(users);
  */
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to API REST');
});

server.listen(8080, 'localhost', () => {
  console.log('Starting server on http://localhost:8080');
});
