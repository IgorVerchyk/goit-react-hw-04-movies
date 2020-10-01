import React from 'react';

import Header from './Header';

import styles from './styles.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <hr />
      {children}
    </div>
  );
}
