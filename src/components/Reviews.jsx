// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  //   useEffect(() => {
  //     HTTP запрос;
  //   }, []);
  return <div>Reviews list</div>;
};
export default Reviews;
