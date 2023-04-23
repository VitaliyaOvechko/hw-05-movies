// import { useEffect } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  //щоб взяти з url динамічне значення id, яке змінюється
  const params = useParams();
  console.log(params);

  const { movieId } = useParams();
  console.log(movieId);

  const location = useLocation();
  console.log(location);

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log(backLinkLocationRef);

  //По отриманому id робимо запит за фільмом

  //   useEffect(() => {
  //     HTTP запрос;
  //   }, []);

  return (
    <div>
      {/* <Link to={location.state && location.state.from}>Go back</Link> */}
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>Деталі 1 фільму</div>
      {/* <div>
        <img></img>
        <h1>Назва фільму</h1>
        <p>User Score</p>
        <ul>
          <li>
            <h2>Overview</h2>
            <p>Overview text</p>
          </li>
          <li>
            <h2>Genres</h2>
            <p>Genres text</p>
          </li>
        </ul>
      </div>
      <div>
        <p> Additional information</p>
        <ul>
          <li>
            <link>Cast</link>
          </li>
          <li>
            <link>Reviews</link>
          </li>
        </ul>
      </div> */}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
