import React, { useEffect, useState } from 'react'
import '../Card.css';
import Rows from './Rows';

const Card = () => {
    const [movie,setMovie]= useState([]);
 
    const styles = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
    }
    const API_KEY = "49de67743a623ee271dbe38a89bc8b03";
    const userrequest = {
        fetchtrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&languages=en-US`,
        fetchNetflixoriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=213`,
        fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
        fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    }

    useEffect(()=>{
        const fetchdata = async () => {
            let response = await fetch(userrequest.fetchTopRated);
            let res = await response.json();
            setMovie(res.results[Math.floor(Math.random() * res.results.length-1)]);
        }
        fetchdata();
    },[])

    // const searchmovie2 = async () => {
    //     let response = await fetch(" http://www.omdbapi.com/?s={batman}&apikey=b411ef50");
    //     let res = await response.json();
    //     setMovie2(res.Search);
    //     console.log(res.Search);
    //     if (currentPage < Math.ceil(res.totalResults / 10)) {
    //         setCurrentPage(prevPage => prevPage + 1);
    //     }
    // }

    return (
        <>
            <header className="banner" style={styles}>
                <div className="banner_contents">
                    <h1 className="banner_title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <h3 className="banner_description">
                        <p>{movie?.overview}</p>
                    </h3>
                </div>
                <div className="banner_fadeBottom" />
            </header>
           
            <Rows title="Action" fetchurl={userrequest.fetchActionMovies}/>
            <Rows title="Comedy" fetchurl={userrequest.fetchComedyMovies}/>
            <Rows title="Documentaries" fetchurl={userrequest.fetchDocumentaries}/>
            <Rows title="Horror" fetchurl={userrequest.fetchHorrorMovies}/>
            <Rows title="Romance" fetchurl={userrequest.fetchRomanceMovies}/>
            <Rows title="Top Rated" fetchurl={userrequest.fetchTopRated}/>
            <Rows title="Trending" fetchurl={userrequest.fetchtrending}/>
            <Rows title="Netflix Originals" fetchurl={userrequest.fetchNetflixoriginals}/>
        </>
    )
}

export default Card
