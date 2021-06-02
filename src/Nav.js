import React, { useEffect, useState } from 'react'
import './nav.css';

const Nav = () => {
    const[show,setShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",( )=>{
            if (window.scrollY > 100){
                setShow(true);
            }else setShow(false)
            
        });
        return()=>{
            window.removeEventListener("scroll");
        };

        



    },[])

   
   
   
    

    return (
        <div className={`nav ${show && "nav__black"}`}>
        <a href="/"><img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo" /></a>

<div className="msg">
<img
        className="nav__avatar"  
        
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar" />

        <p id="demo"> </p>
</div>
        

         
         
         
            
        </div>
        
    )
}

export default Nav
