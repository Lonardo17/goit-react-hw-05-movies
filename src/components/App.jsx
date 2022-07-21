import { lazy, Suspense } from 'react';
// import Navigation from './Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import constants from 'path';
import Navigation from './navigation/Navigation';

const Movies = lazy(() =>
  import('./movies/Movies' /* webpackChunkName: "Movies" */)
);
const MoviesById = lazy(() =>
  import('./movies-by-id/MoviesById' /* webpackChunkName: "MoviesId" */)
);
const Cast = lazy(() =>
  import('./cast/Cast' /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import('./reviews/Reviews' /* webpackChunkName: "Reviews" */)
);

const { home, movies, movieId, cast, reviews } = constants;

export const App = () => {
  return (
    <div>
      <Navigation/>
      <Suspense fallback={<div>Loading please wait ¯\_(ツ)_/¯ </div>}>
        <Routes>
          <Route exact path={home} element={<Home/>}></Route>
          <Route path={movies} element={<Movies />} />
          <Route path={`${movies}/${movieId}`} element={<MoviesById />}>
            <Route path={cast} element={<Cast />} />
            <Route path={reviews} element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};