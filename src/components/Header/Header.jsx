import React, { useState, useEffect } from "react";
import './Header.css';
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 820);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpened(true);
  };

  const handleMenuItemClick = () => {
    setMenuOpened(false);
  };

  return (
    <div className='header'>
      <img src={Logo} alt='Logo' className='logo' />
      {(!menuOpened && mobile) ? (
        <div
          style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
          onClick={handleMenuClick}
        >
          <img src={Bars} alt='' style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <Link onClick={handleMenuItemClick} to='home' spy={true} smooth={true}>Home</Link>
          </li>
          <li>
            <Link onClick={handleMenuItemClick} to='programs' spy={true} smooth={true}>Programs</Link>
          </li>
          <li>
            <Link onClick={handleMenuItemClick} to='reasons' spy={true} smooth={true}>Why us</Link>
          </li>
          <li>
            <Link onClick={handleMenuItemClick} to='plans' spy={true} smooth={true}>Plans</Link>
          </li>
          <li>
            <Link onClick={handleMenuItemClick} to='testimonials' spy={true} smooth={true}>Testimonials</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
