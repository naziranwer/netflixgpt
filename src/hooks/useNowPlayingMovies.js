import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const nowPlayingMovies =useSelector(store=> store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=${randomNumber}`,
      API_OPTIONS
    );
    const result = await data.json(); 

    console.log(result.results);
    dispatch(addNowPlayingMovies(result.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
