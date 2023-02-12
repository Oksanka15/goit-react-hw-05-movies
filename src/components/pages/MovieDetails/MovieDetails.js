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

export const MovieDetails = () => {
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
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
      }}
    >
      <h2>{details.title}</h2>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <img src={BASE_IMG_URL + details.poster_path} alt={details.title} />
      <NavLink to="cast" state={{ from: location.state.from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};
