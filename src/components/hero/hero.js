import './hero_styles.css'
import SimpleCalculator from './simple_calculator';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <section id="home">
        <div className="home_wrap">
            <div className="home_container">
                {/* <div className="curves-c">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="curves-c curves-c-back">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div> */}

                <div className="hero_description_wrap">
                    <div>CALCULATE</div>
                    <div>ANYTHING,</div>
                    <div>CONVERT</div>
                    <div>EVERYTHING</div>
                    <p>
                    Welcome to our comprehensive online calculator hub, where crunching numbers and converting units 
                    is made simple and convenient. Explore our user-friendly tools to effortlessly 
                    solve your everyday calculations with just a few clicks. Experience the efficiency 
                    and accuracy of our calculators and converters today!
                    </p>
                    <Link 
                        activeClass="active" 
                        to="calculators" 
                        spy={true} 
                        smooth={true} 
                        offset={-20} 
                        duration={500} 
                        // onSetActive={handleSetActive}
                        >
                        <motion.button
                            whileHover={{scale: 1.05}} 
                            whileTap={{scale: 0.95}}
                        >
                            Let's Go!
                        </motion.button>
                    </Link>
                </div>
                <div className="hero_image_wrap">
                    <SimpleCalculator />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
