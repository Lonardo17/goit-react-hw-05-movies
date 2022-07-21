import { useParams } from 'react-router-dom';
import { creditsMovie } from 'fetch-movies'; 
import { useState, useEffect } from 'react';


export default function Cast() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [err, setErr] = useState('');

  useEffect(() => {
    creditsMovie(params.movieId)
      .then(res => setPost(res))
      .catch(err => setErr(err.message));
  }, [params.movieId]);

  const { cast } = post;

  return (
    <>
      {cast?.length > 0 ? (
        <>
          <ul>
            {cast.splice(0, 10).map(({ character, name, profile_path, id }) => {
              return (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
                    }
                    alt={name}
                    width="200"
                  />
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Cast not find</p>
      )}
      {err ?? <p>Error 404 {err}</p>}
    </>
  );
}