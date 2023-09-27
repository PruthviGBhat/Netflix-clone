import React, { useState } from 'react'
import './App.css';

const Card = () => {


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
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://flxt.tmsimg.com/assets/p12009531_v_h9_ab.jpg)`,
            }}>
                <div className="banner_contents">
                    <h1 className="banner_title">
                        {/* {movie?.title || movie?.name || movie?.original_name} */}
                        POTC
                    </h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <h3 className="banner_description">
                        {/* {truncate(movie?.overview, 150)} */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et repellendus a consectetur nesciunt animi accusamus beatae eos, quisquam architecto? Ipsa!</p>

                    </h3>
                </div>
                <div className="banner--fedeBottom" />
            </header>
        </>
    )
}

export default Card
