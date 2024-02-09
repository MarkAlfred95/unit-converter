import "./footer_styles.css"
import github_logo from "../assets/github-logo.png"
import linkedin_logo from "../assets/linkedin-logo.png"
import logo from "../assets/MarkAlfred-logo-black.png"

const Footer = () => {

    const openLink = (url) => {
        window.open(url);
    }

    return(
        <footer className="footer_wrap">
            <div className="footer_container">
                <div className="footer_logo_wrap"><img src={logo} alt="my_logo" className="footer_logo_img"></img></div>
                <div className="footer_text_wrap">
                    <span className="footer_text">© 2024 • Developed by</span>
                    <span className="footer_text">Mark Alfred Ignacio</span>
                </div>
                <div className="footer_links_wrap">
                    <div 
                        className="socials_link_footer"
                        onClick={() => openLink("https://www.linkedin.com/in/mark-alfred-ignacio-9365a7267/")}>
                            <img className="socials_link_footer_img" src={linkedin_logo} alt="github"></img>
                    </div>
                    <div 
                        className="socials_link_footer"
                        onClick={() => openLink("https://github.com/MarkAlfred95")}>
                            <img className="socials_link_footer_img" src={github_logo} alt="github"></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer