import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true)
      }
      else {
        setShow(false)
      }
    })

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);


  return (
    <>
      <nav className={`nav ${show && 'nav-black'}`}>
        <img onClick={() => navigate('/')} className="nav-logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix" />
        <img onClick={() => navigate('/profile')} className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
      </nav>
    </>
  )
}

export default Navbar;
