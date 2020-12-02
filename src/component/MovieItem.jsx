import React, { Component } from 'react';
import '../App.css';

class MovieItem extends Component {
  state = {
    willWatch: false
  }
  componentWillUnmount() {
    console.log('unmount', this.props.data.title)
  }
  render() {
    const {movie, remove, addMovieToWillWatch, removeMovieFromWillWacth} = this.props
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
          movie.poster_path}`}
          alt={movie.title}
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <p className="card-raiting mb-0">Rating: {movie.vote_average}</p>
          <div className="d-flex justify-content-between align-items-center">
            {this.state.willWatch ? (
                <button onClick={() => {
                  this.setState({
                    willWatch: false
                  })
                  removeMovieFromWillWacth(movie)
                }}
                 type="button" className="btn btn-success">
                    Remove will watch
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    this.setState({
                      willWatch: true
                    });
                    addMovieToWillWatch(movie)
                  }}
                >
                  Add Will Watch
                </button>
            )}
            <button onClick={() => remove(movie)}>Delete movie</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;