import React, { Component } from 'react';

import Spinner from '../components/Spinner';
import moviesApi from '../servises/APIservise';
import { editUrlInCast } from '../utils/urlFormers';
import Error from '../components/Error';

export default class Cast extends Component {
  state = {
    cast: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchMovieCast(this.props.match.params.movieId)
      .then(cast => this.setState({ cast: editUrlInCast(cast) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  render() {
    const { isLoader, cast, error } = this.state;

    return (
      <>
        {isLoader && <Spinner />}

        {cast && (
          <ul>
            {cast.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img src={profile_path} alt="" width="100" />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )}

        {error && <Error message={error.message} />}
      </>
    );
  }
}
