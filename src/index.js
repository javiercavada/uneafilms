/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// eslint-disable-next-line prettier/prettier
import Formulario from "./formulario.js";
// eslint-disable-next-line prettier/prettier
import History from "./historial.js";

const historial = [];

const App = () => (
  <div className="app">
    <Router>
      <nav className="contenedor">
        <Link className="link" to="/form">
          Formulario
        </Link>
        <br />
        <br />
        <br />
        <Link className="link" to="/history">
          History
        </Link>
        <br />
        <br />
        <br />
      </nav>
      <div className="contenedor">
        <Route path="/form" render={() => <Formulario />} />
        <Route path="/history" render={() => <History />} />
      </div>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default historial;
