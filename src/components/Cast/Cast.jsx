import { useEffect, useState } from 'react';
import { getMovieCast } from 'components/servises/apiServises';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);
  console.log(cast)

  return <h1>Cast</h1>;
};
