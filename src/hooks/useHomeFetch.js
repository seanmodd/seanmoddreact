import { useState, useEffect, useRef } from 'react';
import API from '../API';
import { withAsync } from './withAsync';

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
    console.log('in here');
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
    console.log('this', myMovies);
    fetchMovies(1);
  }, [fetchMovies]);

  return { myMovies, loading, error };
}
