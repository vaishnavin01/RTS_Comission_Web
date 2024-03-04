import React from 'react';
import '../assets/navbar.css';
import { Link } from 'react-router-dom';

import Seal_of_Maharashtra from "../Images/Seal_of_Maharashtra.png";


function Navbar() {
  return (
    <>
      <div className='navbar'>

        <div className='logoheader'>
          <img src={Seal_of_Maharashtra} alt="" className='navlogo' />
          <h2>Government Of Maharashtra</h2>

        </div>

        <ul className='navlist'>

          <li><Link to="/">Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>


      </div>
    </>

  );
}

export default Navbar;
