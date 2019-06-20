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
    this.performSearch('batman');
  }

  /*
  performSearch = async searchTerm => {
    console.log('Perform search using moviedb');
    // npm
    const response = await axios.get(`localhost:8080/history/${searchTerm}`);
    console.log(response);
*/

  performSearch(searchTerm) {
    console.log('Perform search using moviedb');
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=2c934ad33805b2c2e7c6355cd9a821d5&query=${searchTerm}`;
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
  }

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
                <img width="50%" src="UneaFilmsLOGO.png" />
              </td>
              <td width="8" />
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
          placeholder="Buscar película..."
        />

        {this.state.rows}
      </div>
    );
  }
}
export default History;
