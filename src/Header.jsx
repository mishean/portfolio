import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav>
        <Link to="/"> Mishean </Link>
        <Link to="/intro"> Profile </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
    </div>
  )
  ;
}

export default Header;
