import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';

import moviesApi from '../servises/APIservise';
import Spinner from '../components/Spinner';
import routes from '../routes';
import Description from '../components/Description';
import { editUrlInMovie } from '../utils/urlFormers';
import Error from '../components/Error';

const AsyncCast = lazy(() =>
  import('./Cast.js' /* webpackChunkName: "async-cast" */),
);

const AsyncReviews = lazy(() =>
  import('./Reviews.js' /* webpackChunkName: "async-reviews" */),
);

export default class MovieDescription extends Component {
  state = {
    movie: null,
    isLoader: false,
    error: null,
    location: this.props.location.state.from,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie: editUrlInMovie(movie) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  goBack = () => {
    return this.props.history.push(this.state.location);
  };

  render() {
    const { isLoader, movie, error } = this.state;
    const { match } = this.props;
    return (
      <>
        {isLoader && <Spinner />}

        {error && <Error message={error.message} />}

        {movie && (
          <>
            <Description movie={movie} handleGoBack={this.goBack} />
            <hr />
            <NavLink
              to={{
                pathname: `${match.url}${routes.Reviews}`,
                state: { from: this.props.location },
              }}
            >
              Reviews
            </NavLink>

            <NavLink
              to={{
                pathname: `${match.url}${routes.Cast}`,
                state: { from: this.props.location },
              }}
            >
              Cast
            </NavLink>

            <Suspense fallback={<Spinner />}>
              <Route
                path={`${match.path}${routes.Reviews}`}
                component={AsyncReviews}
              />
              <Route
                path={`${match.path}${routes.Cast}`}
                component={AsyncCast}
              />
            </Suspense>
          </>
        )}
      </>
    );
  }
}
