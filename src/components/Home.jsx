import React, { useEffect } from "react";
import MovieListing from "../components/MovieListing";
import { APIKEY } from "../apis/MovieApiKey";
import movieApi from "../apis/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/movies/movieSlice";
const Home = () => {
  let movieText = "horror";
  const dispatch = useDispatch();
  const getMovies = async () => {
    let res = await movieApi
      .get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("error:", err);
      });

    dispatch(addMovies(res.data));
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
