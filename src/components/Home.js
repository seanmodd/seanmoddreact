/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import API from '../API';
import NoImage from '../images/no_image.jpg';
import useHomeFetch from '../hooks/useHomeFetch';
import HeroImage from './HeroImage';

const Home = () => {
  const { myMovies, loading, error } = useHomeFetch();
  // const [movieState, setMovieState] = useState();
  useEffect(() => {
    setMovieState(myMovies);
  }, [myMovies]);
  return (
    <div>
      <h1>idk</h1>

      {movieState ? (
        <HeroImage
          image={`${IMAGE_BASE_URL} ${BACKDROP_SIZE} ${movieState.results[0].backdrop_path}`}
          title={movieState.results[0].original_title}
          text={movieState.results[0].overview}
        />
      ) : null}
    </div>
  );
};
export default Home;
