import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch =useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  // const handleGptSearchClick = async () => {
  //   console.log("hiiiiiiiiiiiii", searchText.current.value);
  //   // Make an API call to GPT API

  //   const gptQuery =
  //     "Act as Movies Recommendation System and suggest some movies for the query: " +
  //     searchText.current.value +
  //     ". only give me names of 5 movies, comma seperated like the example results given ahead. Example result : Hera Pheri,Dhol,Dhamal,3 Idiots,Wanted ";
  //   console.log(gptQuery);

  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });

    
  //   if (!gptResults || !gptResults.choices || gptResults.choices.length === 0) {
  //     console.error("Error in GPT API response");
  //     // Handle the error (e.g., show a message to the user)
  //     window.alert("Error in GPT API");
  //     return;
  //   }
  //   console.log(gptResults.choices);
  //   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  //   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

  //   const tmbdResults = await Promise.all(promiseArray);

  //   console.log("tmdb results", tmbdResults);
  //   dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmbdResults}));
  // };
  const handleGptSearchClick = async () => {
    console.log("hiiiiiiiiiiiii", searchText.current.value);
  
    const gptQuery =
      "Act as Movies Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example results given ahead. Example result : Hera Pheri,Dhol,Dhamal,3 Idiots,Wanted ";
    console.log(gptQuery);
  
    try {
      // Make an API call to GPT API
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
  
      // Check if GPT API response is empty or undefined
      if (!gptResults || !gptResults.choices || gptResults.choices.length === 0) {
        console.error("Error in GPT API response");
        // Handle the error (e.g., show a message to the user)
        window.alert("Error in GPT API");
        return;
      }
  
      console.log(gptResults.choices);
      const gptMovies = gptResults.choices[0]?.message?.content.split(",");
  
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  
      const tmdbResults = await Promise.all(promiseArray);
  
      console.log("tmdb results", tmdbResults);
      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (error) {
      // Handle API errors, including rate-limiting
      console.error("Error in GPT API:", error);
  
      if (error.response && error.response.status === 429) {
        // Rate-limiting error, show a message to the user
        window.alert("API rate limit exceeded. Please try again later.");
      } else {
        // Other API error, show a generic error message
        window.alert("Error in GPT API. Please try again later.");
      }
    }
  };
  
  return (
    <div
      className="pt-[35%] md:pt-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
