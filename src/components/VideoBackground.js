import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  console.log("movie id from container", movieId);
  useMovieTrailer(movieId);
  const  trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  
  console.log("trailer video",trailerVideo);
  const key= trailerVideo ? trailerVideo?.key : "7PIji8OubXU";
  
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&start=10&loop=1&playlist=${key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
