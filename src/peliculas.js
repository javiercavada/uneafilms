/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import axios from 'axios';
import FilasPeliculas from './FilasPeliculas.js';

const $ = require('jquery');

class Peliculas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.performSearch('batman');
  }

  /** ******************************************************************************************************\
* *
* A continuación tenemos comentado el código que habíamos intentado implementar para obtener *
* toda la información de las películas desde el server.js, utilizando la API de The Movie DB. *
* El problema es que nos ha sido imposible mostrar de esta manera las películas en el cliente, *
* por algún error que no hemos logrado localizar, nos hemos pegado bastante con ello ;( *
* Finalmente, hemos tenido que realizar la conexión con la API desde el propio cliente, para poder *
* mostrar correctamente las películas como deseabamos. Por ello, la API KEY no la hemos podido almacenar *
* en un archivo .env como ibamos a hacer. * 
* *
\********************************************************************************************************** */

  /*
  performSearch = async searchTerm => {
    console.log('Perform search usando moviedb');
    const response = await axios.get(`localhost:8080/peliculas/${searchTerm}`);
    console.log(response);
*/

  performSearch(searchTerm) {
    console.log('Perform search usando moviedb');
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=2c934ad33805b2c2e7c6355cd9a821d5&query=${searchTerm}`;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log('Fetch de datos realizado');
        const { results } = searchResults;
        const filas = [];
        results.forEach(movie => {
          movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
          const fila = <FilasPeliculas key={movie.id} movie={movie} />;
          filas.push(fila);
        });

        this.setState({ rows: filas });
      },
      error: (xhr, status, err) => {
        console.error('Error al realizar el fetch de los datos');
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
        <input
          className="buscador"
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Buscar película..."
        />
        {this.state.rows}
      </div>
    );
  }
}
export default Peliculas;
