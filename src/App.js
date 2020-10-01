import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Spinner from './components/Spinner';
import NotFound from './views/NotFound';

import routes from './routes';

const AsyncHome = lazy(() =>
  import('./views/Home.js' /* webpackChunkName: "home" */),
);

const AsyncMoviesList = lazy(() =>
  import('./views/SearchMovies.js' /* webpackChunkName: "movies-list" */),
);

const AsyncMovieDetails = lazy(() =>
  import('./views/MovieDetails.js' /* webpackChunkName: "movie-details" */),
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={routes.home} exact component={AsyncHome} />
          <Route path={routes.movies} exact component={AsyncMoviesList} />
          <Route path={routes.movieDetails} component={AsyncMovieDetails} />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
