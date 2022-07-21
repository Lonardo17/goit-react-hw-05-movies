import { useState, useEffect } from 'react';
import { movieByName } from 'fetch-movies';
import { Link, useSearchParams } from 'react-router-dom';
import constants from 'path';

const { movies } = constants;

export default function Movies() {
  const [name, setName] = useState('');
  const [searchFilm, setSearchFilm] = useState({});
  const [err, setErr] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  function handleSubmit(ev) {
    ev.preventDefault();
    setSearchParams({ query: name });
  }
    
    function onChange({ target: { value } }) {
    setName(value.trim());
  }

  useEffect(() => {
    if (query === null) {
      return;
    }

    movieByName(query)
      .then(result => setSearchFilm(result))
      .catch(error => setErr(error.message));
  }, [query]);

  const { results, total_results } = searchFilm;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        <button type="submit">
          Search
        </button>
      </form>
      {results ? (
        <ul>
          {results.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <Link
                  to={`${movies}/${id}`}
                  state={{ movies, from: `/movies?query=${query}` }}
                >
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      {total_results === 0 ? <p>We don't find {query}</p> : null}
      {err ? <p>Error 404 not found {err}</p> : null}
    </>
  );
}