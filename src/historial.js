/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import axios from 'axios';
import FilasPeliculas from './FilasPeliculas.js';

const $ = require('jquery');

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log("This is my initializer")

    // const movies = [
    //   {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //    title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large"},
    //   {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
    //    title: "	The Avengers", overview: "This is my second overview"},
    // ]

    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}

    this.performSearch('ant man');
  }

  performSearch = async searchTerm => {
    console.log('Perform search using moviedb');
    // npm
    const response = await axios.get('localhost:8080/peliculas', {
      params: searchTerm
    });
    console.log(response);
    /*
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.PELICULAS_API}&query=${searchTerm}`;
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
    */
  };

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg" />
              </td>
              <td width="8" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: 'block',
            width: '99%',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter search term"
        />

        {this.state.rows}
      </div>
    );
  }
}
export default History;
