import React, { Component } from 'react';

import moviesApi from '../servises/APIservise';
import MoviesList from '../components/MoviesList';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

import { editUrlInResults } from '../utils/urlFormers';

export default class Home extends Component {
  state = {
    movies: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchPopularMovies()
      .then(movies => this.setState({ movies: editUrlInResults(movies) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  render() {
    const { isLoader, movies, error } = this.state;

    return (
      <>
        <h2>Popular Films</h2>

        {isLoader && <Spinner />}

        {error && <Error message={error.message} />}

        {movies && <MoviesList movies={movies} {...this.props} />}
      </>
    );
  }
}
