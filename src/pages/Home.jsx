import { getTrendingMovies } from 'components/Api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const results = await getTrendingMovies();
        setMovies([...results.data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <div>
        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={poster_path} alt={title} width={240}></img>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
