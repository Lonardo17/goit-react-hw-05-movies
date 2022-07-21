import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { popularMovies } from 'fetch-movies'; 
import constants from 'path';

const { movies, home } = constants;

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    popularMovies()
      .then(res => setPost(res.results))
      .catch(err => console.log(err.message));
  }, []);

  return (
      <div>
        <h1 >Trending today</h1>
      <ul >
        {post.map(({ original_name, title, id }) => {
          return (
            <li key={id}>
              <Link
                
                to={`${movies}/${id}`}
                state={{ home, from: home }}
              >
                {original_name ?? title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}