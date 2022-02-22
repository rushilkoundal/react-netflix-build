import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Row from '../component/Row'
import requests from '../request';
import Footer from '../component/Footer';

function HomeScreen() {
    return (
        <div className='homescreen'>
            <Navbar />
            <Banner />
            <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documenteries" fetchUrl={requests.fetchDocumentries} />
            <Footer/>
        </div>
    )
}

export default HomeScreen