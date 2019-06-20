/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// eslint-disable-next-line prettier/prettier
import Contacto from "./contacto.js";
// eslint-disable-next-line prettier/prettier
import Peliculas from "./peliculas.js";

const App = () => (
  <div className="app">
    <Router>
      <nav className="contenedor">
        <Link className="link" to="/peliculas">
          <span class="glyphicon glyphicon-film"></span>
          &nbsp; &nbsp;Películas
        </Link>
        <Link className="link" to="/contacto">
          <span class="glyphicon glyphicon-user"></span>
          &nbsp; &nbsp;Contacto
        </Link>
        <img className="center" src="UneaFilmsLOGO.png" />
      </nav>
      <div className="contenedor">
        <Route path="/peliculas" render={() => <Peliculas />} />
        <Route path="/contacto" render={() => <Contacto />} />
      </div>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
