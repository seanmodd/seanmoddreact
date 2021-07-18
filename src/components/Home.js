/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import API from '../API';
import NoImage from '../images/no_image.jpg';
import useHomeFetch from '../hooks/useHomeFetch';
import HeroImage from './HeroImage';

const Home = async () => {
  const { myMovies, loading, error } = await useHomeFetch();
  console.log('test', myMovies);

  return (
    <div>
      <h1>idk</h1>

      {myMovies.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL} ${BACKDROP_SIZE} ${myMovies.results[0].backdrop_path}`}
          title={myMovies.results[0].original_title}
          text={myMovies.results[0].overview}
        />
      ) : null}
    </div>
  );
};
export default Home;
