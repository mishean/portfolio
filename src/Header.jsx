import React, {useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 2) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
  
  return (
    <div>
        <nav className={show ? 'nav nav-2' : 'nav'}>
        <Link className='logo' to="/"> MISHEAN </Link>
        <div className='nav-item'>
        <Link className='item' to="/intro"> PROFILE </Link>
        <Link className='item'  to="/contact"> CONTACT </Link>
        </div>
      </nav>
    </div>
  )
  ;
}

export default Header;

