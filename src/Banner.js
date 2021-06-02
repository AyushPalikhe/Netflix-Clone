import React, { useEffect, useState } from 'react'
import axios from './Axios'
import requests from './Request'
import './Banner.css'
const Banner = () => {
 const[movie, setMovie]=useState([]); 
 useEffect(()=>{
     const fetchData=async()=>{
        const request=await axios.get(requests.fetchTopRated)
       setMovie(
           request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
            ]
       )

     } 
     fetchData()
 },[]) 

 
    const truncate=(str,n)=>{
        return str?.length>n?str.substr(0,n-1)+"..." :str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center"
        }}
        >

            <div className="banner__contents">
             <h1 className="banner__title">
                {movie?.title||movie?.name||movie?.orginal_name}
                </h1>
            <button  className="banner__buttons">Play</button>
            <button className="banner__buttons">My List </button>
           

            
            <h1 className="banner__description">{truncate(movie?.overview,250)}</h1>
            
            </div>
        <div className="banner__fadeBottom">
            
        </div>
        </header>
    )
}

export default Banner
