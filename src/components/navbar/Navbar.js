import "./navbar_styles.css"
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import calcplus from "../../assets/calcplus_logo_black.png"

const Navbar = () => {

  const navigate = useNavigate();
  const handleLinkHome = () => {
    navigate('/');
  }

  return (
    <nav>
      <motion.div
        whileHover={{scale: 1.05}} 
        whileTap={{scale: 0.95}} 
        className="app_title" 
        onClick={handleLinkHome}
      >
        <img src={calcplus} alt="calcplus"/>
        CalcPlus
      </motion.div>
      <ul>
        <NavLink to="/" className="nav_item_link">Home</NavLink>
        <NavLink to="about" className="nav_item_link">About</NavLink>
        <NavLink to="calculator" className="nav_item_link">Calculators</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
