import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const newPosterPath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXa5ocZnqIaCkvQgLJDYm8KmVnL1Nr09CV9OdiIiRu4w&s";
  console.log("newPosterPath",newPosterPath);
  return (
    <div className="w-48 pr-4">
      {posterPath ?<img alt="Movie Card" src={IMG_CDN_URL + posterPath} /> :
      <img alt="Movie Card" src={newPosterPath} width={300}/>}
    </div>
  );
};

export default MovieCard;
