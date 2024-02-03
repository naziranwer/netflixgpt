import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=${randomNumber}`,
      API_OPTIONS
    );
    const result = await data.json();

    dispatch(addTopRatedMovies(result.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
