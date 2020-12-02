import React, { Component } from 'react';
import { moviesData } from './component/moviesData';
import MovieItem from './component/MovieItem';
import MovieTabs from './component/MovieTabs';
import './App.css';

class App extends Component {
    state = {
      movies: [],
      moviesWillatch: [],
      sort_by: "popularity.desc"
    }

  componentDidMount() {
    this.getMovies()
  }

  componentDidUpdate(prevProps, prevState) {
    this.getMovies()
  }

  getMovies() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&sort_by=${this.state.sort_by}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: data.results
      })
    })
  }

  removeMovie = (movie) => {
    const updateMovie = this.state.movies.filter(item => item.id !== movie.id)
    this.setState({
      movies: updateMovie
    })
  }

  addMovieToWillWatch = movie => {
    // this.state.moviesWillatch.push(movie)
    const updateMoviesWllWatch = [...this.state.moviesWillatch, movie]

    this.setState({
      moviesWillatch: updateMoviesWllWatch
    })
  }

  removeMovieFromWillWacth = movie => {
    const updateMoviesWllWatch = this.state.moviesWillatch.filter(item => item.id !== movie.id)
    this.setState({
      moviesWillatch: updateMoviesWllWatch
    })
  }

  updateSortBy = value => {
    this.setState({
      sort_by: value
    })
  }

  render() {
    console.log(this)
    console.log('render', this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div>
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                    <div className="col-6 mb-4" key={movie.id}>
                      <MovieItem
                        movie={movie}
                        remove={this.removeMovie}
                        addMovieToWillWatch={this.addMovieToWillWatch}
                        removeMovieFromWillWacth={this.removeMovieFromWillWacth}
                      />
                    </div>
                  )
                }
              )}

            </div>
          </div>
          <div className="col-3">
              <p>Will Watch {this.state.moviesWillatch.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
