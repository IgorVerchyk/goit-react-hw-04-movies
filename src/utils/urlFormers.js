// modifying images pathes to be able to download images

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const editUrlInResults = results => {
  results.map(item => {
    if (item.poster_path) {
      item.poster_path = `${baseUrl}${item.poster_path}`;
    }
    return item;
  });

  return results;
};

const editUrlInMovie = results => {
  if (results.poster_path) {
    results.poster_path = `${baseUrl}${results.poster_path}`;
  }

  return results;
};

const editUrlInCast = cast => {
  if (cast) {
    cast.map(artist => {
      if (artist.profile_path) {
        artist.profile_path = `${baseUrl}${artist.profile_path}`;
      }

      return artist;
    });
  }
  return cast;
};

export { editUrlInResults, editUrlInMovie, editUrlInCast };
