// import { useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSearchName = searchParams.get('movieSearchName') ?? '';
  console.log(searchParams);

  const location = useLocation();
  console.log(location);

  //   useEffect(() => {
  //     HTTP запрос;
  //   }, [movieSearchName]);

  const handleSearchFormSubmit = e => {
    if ((e.target.value = '')) {
      return setSearchParams({});
    }
    setSearchParams({ movieSearchName: e.target.value });
    // const nextParams = name !==? { name } : {};
    // setSearchParams(nextParams);
  };

  // const handleSearchFormSubmit = query => {
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <div>
      <input
        type="text"
        value={movieSearchName}
        onChange={handleSearchFormSubmit}
      />
      <button onSubmit={handleSearchFormSubmit}>Search</button>
      <div>
        {['movie-1', 'movie-2', 'movie-3'].map(movie => {
          return (
            <Link key={movie} to={`${movie}`} state={{ from: location }}>
              {movie}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
