import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>
      Yoops, it seems like somthing go wrong... Klick this
      <Link to="/"> link</Link> to go back to main page.
    </p>
  </div>
);

export default NotFound;
