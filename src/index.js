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
import Peliculas from "./historial.js";

const peliculas = [];

const App = () => (
  <div className="app">
    <Router>
      <Link className="menuTitulos" to="/contacto">
        Contacto
      </Link>
      <br />
      <br />
      <br />
      <Link className="menuTitulos" to="/peliculas">
        Peliculas
      </Link>
      <br />
      <br />
      <br />
      <div className="bloques">
        <Route path="/contacto" render={() => <Contacto />} />
        <Route path="/peliculas" render={() => <Peliculas />} />
      </div>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default peliculas;
