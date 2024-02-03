import React, { useEffect, useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [loading, setLoading] = useState(true);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center">
        <img src="netflixstarting.gif" alt="Loading GIF" className="max-w-full max-h-full" />
      </div>
      ) : (
        <>
          <Header />
          {showGptSearch ? (
            <GptSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
