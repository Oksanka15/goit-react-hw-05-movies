import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "components/servises/apiServises";
import { MoviesList } from "components/MoviesList/MoviesList";

export const Movies = () => {
const [query, setQuery] = useState('');
const [movies, setMovies] = useState([])
const [searchParams, setSearchParams] = useSearchParams()

useEffect(() => {
    const searchQuery = searchParams.get('query');
    if(!searchQuery){
       return; 
    }
    getMoviesByQuery(searchQuery).then(setMovies);
   
}, [searchParams])

const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchParams({query})
};

const handleChange = (evt) => {
    setQuery(evt.target.value);
}
    return (
    <>
    <h1>Movies</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="query" onChange={handleChange}/>
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies}></MoviesList>
    </>)
}