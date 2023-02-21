import { getMovieReviews } from 'components/servises/apiServises';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { BASE_IMG_URL } from 'components/servises/constants';
import toast, { Toaster } from 'react-hot-toast';
import {
  ReviewList,
  Review,
  Author,
  About,
  Avatar,
  Name,
  ReviewDate,
  Text,
} from './Reviews.styled';

const Reviwes = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(id);
        setReviews(movieReviews);
      } catch (error) {
        console.error(error);
        toast.error(`Sorry, ${error.message}! Try again)`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <>
      <h2>Reviews</h2>
      {isLoading ? (
        <Loader />
      ) : !reviews.length ? (
        <ReviewList>
          {reviews.map(
            ({
              id,
              author,
              content,
              created_at,
              author_details: { avatar_path },
            }) => {
              if (!avatar_path) {
                avatar_path =
                  '/https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg';
              }

              return (
                <Review key={id}>
                  <Author>
                    <Avatar
                      src={
                        avatar_path.includes('https')
                          ? avatar_path.slice(1)
                          : BASE_IMG_URL + avatar_path
                      }
                      alt={`${author}'s avatar`}
                    />
                    <About>
                      <Name>{author}</Name>
                      <ReviewDate>
                        {new Date(created_at).toLocaleString()}
                      </ReviewDate>
                    </About>
                  </Author>
                  <Text>{content}</Text>
                </Review>
              );
            }
          )}
        </ReviewList>
      ) : (
        <p>Sorry, no reviews yet!</p>
      )}
      <Toaster />
    </>
  );
};
export default Reviwes;
