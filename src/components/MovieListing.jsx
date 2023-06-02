import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice";
import MovieCard from "../components/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="flex flex-col w-full h-full bg-primary p-8">
      <h2 className="flex w-full text-fontsecondary text-lg">Movies</h2>
      <div className="text-fontprimary py-4 flex gap-x-10 ">{renderMovies}</div>
    </div>
  );
};

export default MovieListing;
