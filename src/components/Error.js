import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ message }) => {
  const text = `Bad luck, somhing go wrong.... ${message}`;
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Errors;

Errors.propTypes = {
  message: PropTypes.string.isRequired,
};
