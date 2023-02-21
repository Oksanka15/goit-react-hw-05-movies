import { getMovieDetails } from 'components/servises/apiServises';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BASE_IMG_URL } from 'components/servises/constants';
import {
  Details,
  DetailsOverview,
  TextDetails,
  ButtonGoBack,
  PosterDetails,
} from '../MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(location.state.from);
  };
  useEffect(() => {
    getMovieDetails(id).then(setDetails);
  }, [id]);

  if (!details) {
    return null;
  }
  const { title, poster_path, overview, runtime } = details;

  return (
    <Details>
      <PosterDetails src={BASE_IMG_URL + poster_path} alt={title} />

      <DetailsOverview>
        {' '}
        <h2>{title}</h2>
        <ButtonGoBack type="button" onClick={handleGoBack}>
          Go back
        </ButtonGoBack>
        <h2>Overview:</h2>
        <TextDetails>{overview}</TextDetails>
        <TextDetails>RunTime: {runtime} minutes </TextDetails>
      </DetailsOverview>
      <NavLink to="cast" state={{ from: location.state.from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </Details>
  );
};
export default MovieDetails;
