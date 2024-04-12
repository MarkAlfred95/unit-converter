import './pages_styles.css'
import github_logo from "../assets/github-logo.png"
import linkedin_logo from "../assets/linkedin-logo.png"
import logo from "../assets/MarkAlfred_logo_circle.png"

import { motion } from "framer-motion";
import ScrollToTop from '../components/scrolltotop';

const About = () => {

  const openLink = (url) => {
    window.open(url);
  }

  return (
    <>
      <ScrollToTop />
      <section>
        <div className="about_wrap">
          <div className="about_container">
            <h1>About CalcPlus</h1>
            <p>
              Welcome to CalcPlus, your one-stop destination for all your calculation and conversion needs!
            </p>
            <p>
              At CalcPlus, we understand that everyone encounters situations where precise calculations and
              conversions are essential. Whether you're a student, a professional, or simply someone who needs
              to crunch numbers from time to time, our platform offers a comprehensive array of tools to assist you.
            </p>
            <p>
              With a diverse collection of 12 calculators and 8 converters, CalcPlus empowers you to effortlessly
              tackle a wide range of mathematical and unit conversion tasks. From basic arithmetic operations to
              complex scientific calculations, our calculators cover it all. Need to convert currencies, units of
              measurement, or even time zones? Our converters have got you covered, providing accurate and efficient
              solutions at your fingertips.
            </p>
            <p>
              CalcPlus is designed with user-friendliness in mind, ensuring a seamless and intuitive experience
              for every user. Our user interface is clean, simple, and easy to navigate, allowing you to access
              the tools you need without any hassle. Whether you're accessing CalcPlus on your desktop, tablet,
              or smartphone, you can count on a responsive and reliable performance every time.
            </p>
            <p>
              We're committed to continually expanding our collection of calculators and converters to meet the
              evolving needs of our users. At CalcPlus, we believe in making complex calculations and conversions
              as simple and accessible as possible, so you can focus on what matters most to you.
            </p>
          </div>
          <div className="about_container">
            <h1>About Developer</h1>
            <p>
              This simple calculator hub was developed by Mark Alfred Ignacio, an aspiring web developer based in the
              Philippines. He is a graduate of the Bachelor of Science in Information Technology at College
              Meycauayan, batch 2023. He is now pursuing a career in the field of information technology,
              specifically software development. He remains committed to continuous learning,
              understanding the ever-evolving nature of technologies.
            </p>
            <div className="social_links_wrap">
              <motion.div
                  className="social_links"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openLink("https://markalfredignacio.vercel.app/")}>
                      <img className="social_links_img" src={logo} alt="my porfolio"></img>
              </motion.div>
              <motion.div
                  className="social_links"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openLink("https://www.linkedin.com/in/mark-alfred-ignacio-9365a7267/")}>
                      <img className="social_links_img" src={linkedin_logo} alt="github"></img>
              </motion.div>
              <motion.div
                  className="social_links"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openLink("https://github.com/MarkAlfred95")}>
                      <img className="social_links_img" src={github_logo} alt="github"></img>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;