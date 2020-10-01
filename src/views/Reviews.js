import React, { Component } from 'react';

import Spinner from '../components/Spinner';
import moviesApi from '../servises/APIservise';
import Error from '../components/Error';

import styles from '../components/styles.module.css';

export default class Reviews extends Component {
  state = {
    reviews: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchMovieReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  render() {
    const { isLoader, reviews, error } = this.state;
    return (
      <>
        {isLoader && (
          <div>
            <Spinner />
          </div>
        )}

        <div className={styles.wrapper}>
          {reviews.length > 0 && (
            <ul>
              {reviews.map(review => {
                return (
                  <li key={review.id}>
                    <h3>Author: {review.author}</h3>
                    <p>{review.content}</p>
                  </li>
                );
              })}
            </ul>
          )}

          {reviews.length === 0 && (
            <p>
              There is no reviews for this movie, maybe you try to write some?
            </p>
          )}
        </div>

        {error && <Error message={error.message} />}
      </>
    );
  }
}
