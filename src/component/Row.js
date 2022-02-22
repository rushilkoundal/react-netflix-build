// import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react';
// import YouTube from 'react-youtube';
import axios from '../axios';
import './Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const opts = {
    width: "100%",
    height: "500",
    playerVars: {
      autoplay: 1
    }
  }
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      // return request;
      console.log(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // const handleClick = (movie) =>{
  //   if(trailerUrl){
  //     setTrailerUrl("")
  //   }
  //   else{
  //     movieTrailer(movie?.name || "")
  //     .then((url) =>{
  //       let urlParams = new URLSearchParams(new URL(url).search)
  //       setTrailerUrl(urlParams.get("v"));
  //     })
  //     .catch((error) => console.log(error));
  //   }
  // }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map(movie => (
            <img className={`row-poster ${isLargeRow && 'row-posterLarge'}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
        <div className={`${isLargeRow ? 'row-fadeRightLarge' : 'row-fadeRight'}`} />
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} */}
    </div>
  )
};

export default Row;
