import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../components/Spinner';
import moviesApi from '../servises/APIservise';
import Searchbox from '../components/Searchbox';
import getQueryParams from '../utils/queryParams';

export default class MoviesList extends Component {
  state = {
    movies: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.setState({ isLoader: true });
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (nextQuery !== prevQuery) {
      this.setState({ isLoader: true });
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    moviesApi
      .fetchByQuery(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, isLoader, error } = this.state;
    const { match } = this.props;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {isLoader && <Spinner />}

        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
