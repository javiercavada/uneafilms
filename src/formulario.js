import React from 'react';
import axios from 'axios';
import historial from './index';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uuid: '', palabra: '', historyCont: '' };
    this.handleChangeUuid = this.handleChangeUuid.bind(this);
    this.handleChangePalabra = this.handleChangePalabra.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUuid(event) {
    this.setState({ uuid: event.target.value });
  }

  handleChangePalabra(event) {
    this.setState({ palabra: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('https://03-react-stub.glitch.me/interact', {
        timestamp: '2019-02-23T20:00:00+01:00',
        palabra: this.state.palabra,
        uuid: this.state.uuid
      })
      .then(response => {
        historial.push({
          peticion: {
            url: 'https://03-react-stub.glitch.me/interact',
            timestamp: new Date().toLocaleString()
          },
          respuesta: {
            uuid: response.data.uuid,
            timestamp: response.data.timestamp,
            behaviour: response.data.behavior
          }
        });
      });
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <br />
            UUID: <br />
            <input
              type="text"
              value={this.state.uuid}
              onChange={this.handleChangeUuid}
              required
            />
          </label>
          <label>
            <br />
            <br />
            Palabra: <br />
            <input
              type="text"
              value={this.state.palabra}
              onChange={this.handleChangePalabra}
              required
            />
          </label>
          <br />
          <br />
          <button className="button" onClick={this.handleSubmit}>
            Enviar
          </button>{' '}
          <br /> <br />
        </form>
      </div>
    );
  }
}
export default Formulario;
