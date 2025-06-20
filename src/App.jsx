import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { getTrendingMovies, updateSearchCount } from './appwrite';
import Search from './components/search';
import Spinner from './components/spinner';
import MovieCard from './components/movieCard';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || '';
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 700);
  const [trendingMovies, setTrendingMovies] = useState([]);
  // old code
  // const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Faild to fetch Data');
      }

      const data = await response.json();

      if (data.errors) {
        setErrorMessage(data.errors[0] || 'Failed to fetch data');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.log(`Error fetching movies ${error}`);
      setErrorMessage('Error fetching movies Please check the Api connection');
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movie = await getTrendingMovies();
      setTrendingMovies(movie || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  });

  return (
    <>
      <main>
        <div className="pattern">
          <div className="wrapper">
            <header>
              <img src="https://i.postimg.cc/Xv576dk4/hero.png" alt="" />
              <h1>
                Find Your <span className="text-gradient">Movies</span> You'll
                Enjoy Without the Hassle
              </h1>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </header>
            {trendingMovies.length > 0 && (
              <section className="trending">
                <h2>Trending Movies</h2>

                <ul>
                  {trendingMovies.map((movie, index) => (
                    <li key={movie.$id}>
                      <p>{index + 1}</p>
                      <img src={movie.poster_url} alt="movie img" />
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <section className="all-movies">
              <h2>All Movies</h2>

              {isLoading ? (
                <Spinner />
              ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
              ) : (
                <ul>
                  {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
