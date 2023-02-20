import { Routes, Route } from "react-router-dom";
/* webpackChunkName: "homePage" */
import { Home } from "./pages/Home/Home";
import { Navigation } from "./Navigation/Navigation";
import { Movies } from "./pages/Movie/Movies";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Reviwes } from "./Reviews/Reviews";
import {Cast} from "./Cast/Cast";
//1:52:06
export const App = () => {
  return (
    <div style={{
    
      padding: '40px'
  }

  }>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieDetails />}>
         <Route path="cast" element={<Cast />}/>
         <Route path="reviews" element={<Reviwes />} />
        </Route>
      </Routes>
    </div>
  );
};
