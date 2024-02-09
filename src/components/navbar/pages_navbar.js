import "./navbar_styles.css"
import { NavLink } from 'react-router-dom'

const PageNav = () => {

    return (
        <nav>
            <div className="app_title">Convert & Calculate</div>
            <ul>
                <li className="nav_item">
                    <NavLink exact="true" to="/" className="nav_item_link">Home</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink exact="true" to="/" className="nav_item_link">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default PageNav;
