import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const upcomingMovies =useSelector(store=> store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?page=${randomNumber}`,
      API_OPTIONS
    );
    const result = await data.json();

    console.log(result.results);
    dispatch(addUpcomingMovies(result.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
