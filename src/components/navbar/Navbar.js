import { useEffect, useState, useRef } from "react";
import "./navbar_styles.css"
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import calcplus from "../../assets/calcplus_logo_black.png"

const Navbar = () => {

  const navigate = useNavigate();
  const handleLinkHome = () => {
    navigate('/');
  }

  const hamMenuRef = useRef(null);
  const hamMenuRefB = useRef(null);
  const [openHamMenu, setOpenHamMenu] = useState(false);
  const handleOpenHamMenu = () => {
      setOpenHamMenu(!openHamMenu);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((hamMenuRef.current && !hamMenuRef.current.contains(event.target)) && 
        hamMenuRefB.current && !hamMenuRefB.current.contains(event.target)) {
        setOpenHamMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hamMenuRef, hamMenuRefB]);

  return (
    <nav>
      <motion.div
        whileHover={{scale: 1.05}} 
        whileTap={{scale: 0.95}} 
        className="app_title" 
        onClick={handleLinkHome}
      >
        <img src={calcplus} alt="calcplus"/>
        <div className="webapp_name">
          <div>Calc</div>
          <div className="webapp_name_blue">Plus</div>
        </div>
      </motion.div>
      <ul className="nav_list">
        <NavLink to="/" className="nav_item_link">Home</NavLink>
        <NavLink to="about" className="nav_item_link">About</NavLink>
        <NavLink to="calculator" className="nav_item_link">Calculators</NavLink>
      </ul>

      <div className="hamburger_btn_wrap" ref={hamMenuRefB}>
        <input
          type="checkbox"
          id="ham_checkbox"
          onChange={handleOpenHamMenu}
          checked={openHamMenu}
        />
        <label htmlFor="ham_checkbox" className="custom_hamburger">
            <div className="ham_bars" id="bar1"></div>
            <div className="ham_bars" id="bar2"></div>
            <div className="ham_bars" id="bar3"></div>
        </label>
      </div>

      <div 
        className="hamburger_menu"
        ref={hamMenuRef}
        style={{
          width: openHamMenu ? '15rem' : '0',
        }}
      >
        <div className="ham_menu_btn"></div>
        <NavLink to="/" className="ham_nav_btn" onClick={handleOpenHamMenu}>
          <span className="ham_nav_text">Home</span>
        </NavLink>
        <NavLink to="about" className="ham_nav_btn" onClick={handleOpenHamMenu}>
          <span className="ham_nav_text">About</span>
        </NavLink>
        <NavLink to="calculator" className="ham_nav_btn" onClick={handleOpenHamMenu}>
          <span className="ham_nav_text">Calculators</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
