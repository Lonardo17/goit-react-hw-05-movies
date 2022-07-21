import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { informationMovies } from 'fetch-movies';
import constants from 'path';
import s from './MoviesById.module.css';

const { cast, reviews, movies } = constants;

export default function MoviesId() {
  const [data, setData] = useState([]);
  const params = useParams();
  const IMG_URL = 'https://image.tmdb.org/t/p';
  const location = useLocation();

  const { genres, title, vote_average, overview, poster_path } = data;

  useEffect(() => {
    informationMovies(params.movieId)
      .then(res => setData(res))
      .catch(err => console.log(err.message));
  }, [params.movieId]);

  return (
    <>
      <div>
        <div className={s.movieId}>
        <img
          width="350"
          src={`${
            poster_path
              ? IMG_URL + '/w500' + poster_path
              : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
          }`}
          alt={`${title !== '' ? title : 'We don`t have title'}`}
          />
          <div>
        <h2>{title}</h2>
        <p>{`User score: ${vote_average * 10}%`}</p>
        <ul >
          <li>
            <h3 >Overview</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h3 >Genres</h3>
            <ul>
              {genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </li>
            </ul>
            </div>
          </div>
        <h3>Additional information</h3>
        <ul >
          <li>
            <Link
              to={cast}
              state={{ movies, from: location.state.from }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={reviews}
              state={{ movies, from: location.state.from }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}