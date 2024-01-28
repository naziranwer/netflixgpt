import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("movies in secondary", movies.nowPlayingMovies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        {/* <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} /> */}
        <MovieList title={"Most Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        {/* <MovieList title={"Comedy"} movies={movies?.nowPlayingMovies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
