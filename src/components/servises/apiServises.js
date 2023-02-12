//API_KEY = d9a0cc661b661e7359674d300e5af663
// https://api.themoviedb.org/3/movie/550?api_key=d9a0cc661b661e7359674d300e5af663
//https://api.themoviedb.org/3/search/movie?&language=en-US&query=${query}&page=1&include_adult=false
//movie/${id}?&language=en-US
//export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const API_KEY = 'd9a0cc661b661e7359674d300e5af663';

export const getTrendingMovies = async () => {
  const resp = await axios.get(`/trending/movie/day?`, {
    params: {
      api_key: API_KEY,
      page: 1,
    },
  });
  return resp.data.results;
};


export const getMoviesByQuery = async query => {
    const resp = await axios.get(
      `/search/movie?&language=en-US&query=${query}&page=1&include_adult=false`,
      {
        params: {
          api_key: API_KEY,
          page: 1,
        },
      }
    );
    return resp.data.results;
  };

export const getMovieDetails = async id => {
    const resp = await axios.get(`movie/${id}?&language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });
    return resp.data;
  };
  
  export const getMovieCast = async id => {
    const resp = await axios.get(`movie/${id}/credits?&language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });
    return resp.data.cast;
  };
  
  export const getMovieReviews = async id => {
    const resp = await axios.get(`movie/${id}/reviews?&language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });
    return resp.data.results;
  };