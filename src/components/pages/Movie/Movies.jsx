import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "components/servises/apiServises";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";
import { SearchForm, SearchInput, SearchButton, Headers} from "./Movies.styled";

 const Movies = () => {
const [query, setQuery] = useState('');
const [movies, setMovies] = useState([])
const [searchParams, setSearchParams] = useSearchParams()
const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    const searchQuery = searchParams.get('query');
    if(!searchQuery){
       return; 
    }
    getMoviesByQuery(searchQuery)
    .then(setMovies)
    .finally(()=>{
        setIsLoading(false);
        setQuery(searchQuery)});
   
}, [searchParams])

const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setSearchParams({query})
};

const handleChange = (evt) => {
    setQuery(evt.target.value);
}
    return (
    <>
    {isLoading && <Loader/>}
    <Headers>Movies</Headers>
    <SearchForm onSubmit={handleSubmit}>
        <SearchInput type="text" name="query" value={query} onChange={handleChange}/>
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <MoviesList movies={movies}></MoviesList>
    </>)
}
export default Movies;