import React from "react";
import MovieCard from "./MovieCard";
import Shimmer from "../utils/shimmer/Shimmer";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 ">
      <h1 className="text-lg md:text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden scroll-smooth">
        <div className="flex">
          {movies ? (
            movies.map((movie) => (
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
            ))
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;



