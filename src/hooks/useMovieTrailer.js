import { useEffect } from "react";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo =useSelector(store => store.movies.trailerVideo);

  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log("movie videos", json.results);

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];

    console.log(trailer);
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMoviesVideos();
  }, []);
};
export default useMovieTrailer;
