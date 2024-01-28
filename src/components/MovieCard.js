import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const newPosterPath = "https://img.lovepik.com/png/20231021/not-loaded-during-loading-update-speed-update-off-the-net_287399_wh1200.png";
  console.log("newPosterPath",newPosterPath);
  return (
    <div className="w-40 md:w-48 pr-4">
      {posterPath ?<img alt="Movie Card" src={IMG_CDN_URL + posterPath} /> :
      <img alt="Movie Card" src={newPosterPath} width={300}/>}
    </div>
  );
};

export default MovieCard;
