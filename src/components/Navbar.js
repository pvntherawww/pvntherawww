import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './VHS.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>

      <div class="lines"></div>
      <div class="noise"></div>

      
        <div className='navbar-container'>

        <div class="main"><div class="counter">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           Pvnthera WWW 
            
          </Link> 
          </div> </div> 
          <div class="time"><span id="time"></span></div>

          
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <div class="main1"><div class="counter">Home</div></div>
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/music'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              <div class="main2"><div class="counter">Music</div></div>
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/pvntherawww'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              <div class="main3"><div class="counter">Code</div></div>
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              <div class="main4"><div class="counter"> Blog </div></div>
              </Link>
            </li>
            

            <li>
              
            </li>
          </ul> 
            
          </div>
      </nav>
    </>
  );
}

export default Navbar;