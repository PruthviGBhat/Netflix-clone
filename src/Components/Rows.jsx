import React, { useState,useEffect} from 'react'
import "../Row.css";

const Rows = ({ title,fetchurl }) => {
  const [movie,setMovie]=useState([]);
    useEffect(()=>{
      const fetchdata = async () => {
          let response = await fetch(fetchurl);
          let res = await response.json();
          console.log(res)
          setMovie(res.results);
          return res;
      }
      fetchdata();
  },[fetchurl])


  return (
    <>
      <div className='row'>
        <h1 className='bg-black text-2xl'>{title}</h1>
        <div className='row_posters'>
          {
            movie.map((e,index)=>{
              return(
                <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} alt="hello" className='rowposterimg' key={index}/>
              )
            })
          }
        
      
        </div>
      </div>
    </>
  )
}

export default Rows
