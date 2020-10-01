import React from 'react';

import MoviesItem from './MovieListItem';

import styles from './styles.module.css';

const MoviesList = ({ movies, ...props }) => (
  <ul className={styles.moviesList}>
    {movies.map(({ id, ...moviesProps }) => (
      <MoviesItem key={id} id={id} {...moviesProps} {...props} />
    ))}
  </ul>
);

export default MoviesList;
