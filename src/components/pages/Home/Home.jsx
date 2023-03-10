import { getTrendingMovies } from 'components/servises/apiServises';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';


const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
     
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
