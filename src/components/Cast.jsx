// import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  //   useEffect(() => {
  //     HTTP запрос;
  //   }, []);

  return <div>Cast list</div>;
};
export default Cast;
