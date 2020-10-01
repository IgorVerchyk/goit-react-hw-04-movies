import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../routes';

import styles from './styles.module.css';

const MoviesItem = ({ id, poster_path, title, location }) => {
  return (
    <li className={styles.moviesItem}>
      <Link
        to={{
          pathname: `${routes.movies}/${id}`,
          state: { from: location },
        }}
      >
        <img src={poster_path} alt={title} />
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

export default MoviesItem;
