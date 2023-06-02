import React, { useEffect } from "react";
import MovieListing from "../components/MovieListing";
import { APIKEY } from "../apis/MovieApiKey";
import movieApi from "../apis/movieApi";
import { useDispatch } from "react-redux";
import { getMovies } from "../features/movies/movieSlice";
const Home = () => {
  let movieText = "horror";
  const dispatch = useDispatch();
  const getMovies = async () => {
    try {
      let res = await movieApi.get(
        `?apikey=${APIKEY}&s=${movieText}&type=movie`
      );

      dispatch(getMovies(res.data));
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div>
      <div></div>
      <MovieListing />
    </div>
  );
};

export default Home;
