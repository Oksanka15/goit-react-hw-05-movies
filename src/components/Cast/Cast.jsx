import { useEffect, useState } from 'react';
import { getMovieCast } from 'components/servises/apiServises';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL } from 'components/servises/constants';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { CastText, CastPhoto, CastItem, CastList } from '../Cast/Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieCast = async () => {
      try {
        const movieCast = await getMovieCast(id);
        setCast(movieCast);
      } catch (error) {
        console.log(error);
        toast.error(`Sorry, ${error.message}! Try again)`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [id]);
  return (
    <>
      <h2>Cast</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <CastList>
          {cast.map(({ order, profile_path, name, character }) => (
            <CastItem key={order}>
              <CastPhoto src={BASE_IMG_URL + profile_path} alt={name} />
              <CastText> {name}</CastText>
              <CastText>Character: {character}</CastText>
            </CastItem>
          ))}
        </CastList>
      )}
      <Toaster />
    </>
  );
};

export default Cast;
