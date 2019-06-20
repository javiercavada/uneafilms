import React from 'react';

class FilaPeliculas extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = `https://www.themoviedb.org/movie/${this.props.movie.id}`;
    window.location.href = url;
  }

  render() {
    return (
      <table className="tablapeliculas" key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img
                className="poster"
                alt="poster"
                src={this.props.movie.poster_src}
              />
            </td>
            <td>
              <h3 className="titulosPeliculas">{this.props.movie.title}</h3>
              <p className="textosPeliculas">{this.props.movie.overview}</p>
              <input
                className="botonReview"
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="Más info"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default FilaPeliculas;
