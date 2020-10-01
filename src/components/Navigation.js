import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../routes';

import styles from './styles.module.css';

const Navigation = () => (
  <ul className={styles.navBar}>
    <li className={styles.navItem}>
      <NavLink
        to={routes.home}
        className={styles.link}
        activeClassName={styles.activeLink}
        exact
      >
        Home
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        to={routes.movies}
        className={styles.link}
        activeClassName={styles.activeLink}
        exact
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
