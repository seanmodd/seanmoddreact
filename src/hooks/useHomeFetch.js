import { useState, useEffect, useRef } from 'react';
import API from '../API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export default function useHomeFetch() {
  const [myMovies, setMyMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log('usehomneeftch');

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);

      setMyMovies({
        ...movies,
        results:
          page > 1 ? [...myMovies.results, ...movies.results] : movies.results,
      });
    } catch (error) {
      setError(true);
    }
    console.log('im here', myMovies);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1);
    console.log('this', myMovies);
  }, []);

  return { myMovies, loading, error };
}
