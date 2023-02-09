import React, { useState , useEffect} from 'react'
import './Nav.css';

function Nav() {
    const [show,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>500?handleShow(true):handleShow(false)
        })
    },[])
    console.log(show);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='logo' src='https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png' alt='netflix logo'></img>
    </div>
  )
}

export default Nav