import { lazy, Suspense } from 'react';
import Navigation from './Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

// const Movies = lazy(() =>
//   import('./Movies/Movies' /* webpackChunkName: "Movies" */)
// );
// const MoviesId = lazy(() =>
//   import('./Movies/MoviesId/MoviesId' /* webpackChunkName: "MoviesId" */)
// );
// const Cast = lazy(() =>
//   import('./Movies/Cast/Cast' /* webpackChunkName: "Cast" */)
// );
// const Reviews = lazy(() =>
//   import('./Movies/Reviews/Reviews' /* webpackChunkName: "Reviews" */)
// );

const constants = {
  home: '/',
  movies: '/movies',
  movieId: ':movieId',
  cast: 'cast',
  reviews: 'reviews',
};
const { home, movies, movieId, cast, reviews } = constants;

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading please wait ¯\_(ツ)_/¯ </div>}>
        <Routes>
          <Route path={home} element={<Home />}></Route>
          {/* <Route path={movies} element={<Movies />} />
          <Route path={`${movies}/${movieId}`} element={<MoviesId />}>
            <Route path={cast} element={<Cast />} />
            <Route path={reviews} element={<Reviews />} />
          </Route> */}
        </Routes>
      </Suspense>
    </div>
  );
};