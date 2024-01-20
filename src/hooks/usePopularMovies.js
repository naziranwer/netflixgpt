import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const getPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${randomNumber}`,
      API_OPTIONS
    );
    const result = await data.json();

    console.log(result.results);
    dispatch(addPopularMovies(result.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
