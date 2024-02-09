import "./navbar_styles.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
      <div className="app_title">Convert & Calculate</div>
      <ul>
        <NavLink to="/" className="nav_item_link">Home</NavLink>
        <NavLink to="about" className="nav_item_link">About</NavLink>
        <NavLink to="calculator" className="nav_item_link">Calculators</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
