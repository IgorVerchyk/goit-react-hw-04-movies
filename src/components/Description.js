import React from 'react';

const Description = ({ movie, handleGoBack }) => {
  const {
    title,
    poster_path,
    genres,
    vote_average,
    overview,
    release_date,
  } = movie;

  return (
    <div>
      <div>
        <button type="button" onClick={handleGoBack}>
          Back
        </button>
        <img src={poster_path} alt={title} />
      </div>
      <div>
        <h2>
          {title} ({release_date})
        </h2>
        <p>User Score: {vote_average * 10}%</p>

        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>

        {genres && (
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Description;
