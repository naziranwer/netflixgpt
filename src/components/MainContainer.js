import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies =useSelector(store=> store.movies?.nowPlayingMovies);

  if(!movies) return;
  const randomNumber = Math.floor(Math.random() * 21) ;
  const mainMovie =movies[randomNumber];
  
  if(!mainMovie) return;
  const {title,overview} =mainMovie;
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={mainMovie?.id}/>
    </div>
  )
}

export default MainContainer