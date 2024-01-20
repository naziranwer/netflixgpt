import { useDispatch } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const getUpcomingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${randomNumber}`,
      API_OPTIONS
    );
    const result = await data.json();

    console.log(result.results);
    dispatch(addUpcomingMovies(result.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
