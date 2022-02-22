import axios from '../axios';
import React, { useState, useEffect } from 'react';
import requests from '../request';
import './Banner.css'

function Banner() {
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )
            // return request;
        }
        fetchData();
    }, []);

    return <header className='banner' style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center" }}>
        <div className="banner-content">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            <button className="banner-buttons">Play</button>
            <button className="banner-buttons">My List</button>
            <p className="banner-description">{truncate(movie?.overview, 150)}</p>
        </div>
        <div className="banner-fadeBottom" />
    </header>;
}

export default Banner;
