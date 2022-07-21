import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { reviewsMovie } from 'fetch-movies';

export default function Reviews() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [err, setErr] = useState('');

  console.log(params);

  useEffect(() => {
    reviewsMovie(params.movieId)
      .then(res => setPost(res))
      .catch(err => setErr(err.message));
  }, [params.movieId]);

  const { results, total_results } = post;

  return (
    <>
      {total_results > 0 ? (
        <>
          <ul>
            {results.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Comments not find(((</p>
      )}
      {err ?? <p>Error 404 {err}</p>}
    </>
  );
}