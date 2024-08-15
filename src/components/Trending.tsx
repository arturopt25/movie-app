import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/tmdb';

interface Movie {
  id: number;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
}

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axiosInstance.get('/api/trending');
        setMovies(response.data.results || []);
        console.log(movies)
      } catch (error) {
        console.error('Error fetching trending data:', error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
      <h1>Trending Movies and TV Shows</h1>
      <ul>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title || movie.name}</h2>
              <p>{movie.overview}</p>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
              )}
            </li>
          ))
        ) : (
          <p>No trending data available</p>
        )}
      </ul>
    </div>
  );
};

export default Trending;
