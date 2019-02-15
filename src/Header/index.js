import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <h1>LeaseGuard</h1>
      <div className="logout"><Link to='/'>Logout</Link></div>
    </header>
  )
}


export default Header;