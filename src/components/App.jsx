import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { lazy, Suspense } from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movie/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviwes = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviwes />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
