import { getTrendingMovies } from 'components/servises/apiServises';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import {HomeStyle} from 'components/App.styled'

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      {/* <HomeStyle>Watch new movie !!!</HomeStyle> */}
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
