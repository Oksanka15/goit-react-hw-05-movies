
import { useLocation } from 'react-router-dom';
import { MoviesListStyle ,ListLink, Poster ,Rating, Title} from './MovieList.styled';
import { BASE_IMG_URL } from 'components/servises/constants';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListStyle>
      {movies.map(({id, title, vote_average , poster_path}) => (
        <li key={id}>
          <ListLink to={`/movies/${id}`} state={{from:location}}>
            <Poster src={ BASE_IMG_URL + poster_path}
              alt={title}/>
              <Title>{title}</Title>
              <Rating>{vote_average ? vote_average.toFixed(1) : 'N/A'}</Rating> 
          </ListLink>
        </li>
      ))}
    </MoviesListStyle>
  );
};
