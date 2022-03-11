import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)          //setting the click to yes or no
  const closeMobileMenu = () => setClick(false)

  const showButton = () =>{
      if(window.innerWidth <= 960){
          setButton(false)
      } else{
          setButton(true)
      }
    };

    useEffect(()=>{
        showButton()
    },[]);

    window.addEventListener('resize', showButton);
          //function to display depending on screensize
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    Maxim Kasianiuk <i class ='fa-solid fa-user-secret' /> 
                </Link>
                <div className='menu-icon' onClick ={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                         Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                    
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign In</Button>}
            </div>
        </nav>   
    </>
  )
}

export default NavBar

//fa-solid is the icon
//handleclick deals with the burger 
//ul classname {has if statements in js} makes drop down menu
//outside ul is where button component goes