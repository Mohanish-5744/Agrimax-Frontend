import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './menu1.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = (event) => {
    setIsOpen(!isOpen);
    event.stopPropagation();
  };

  const handleBodyClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className={`open1 ${isOpen ? 'oppenned' : ''}`} onClick={handleMenuClick} ref={menuRef}>
        <span className="cls"></span>
        <span>
          <ul className="sub-menu ">
            <li>
              <a title="About"><Link to="/aboutus" >Services / About</Link></a>
            </li>
            <li>
              <a title="Crop"><Link to="/CropDet">Yield / Crop</Link></a>
            </li>
            <li>
              <a title="Prediction"><Link to="/predictionHome">conjecture / Prediction</Link></a>
            </li>
            <li>
              <a href="Contact Us" title="contact"><Link to="/contactUs">Reach / Contact</Link></a>
            </li>
          </ul>
        </span>
        <span className="cls"></span>
      </div>
    </div>
  );
};

export default Menu;
