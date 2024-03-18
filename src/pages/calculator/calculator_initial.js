import { NavLink } from 'react-router-dom'

import age_calc_icon from '../../assets/age_calc_icon.png'
import area_calc_icon from '../../assets/area_calc_icon.png'
import bmi_calc_icon from '../../assets/bmi_calc_icon.png'
import currency_convert_icon from '../../assets/currency_convert_icon.png'
import percent_calc_icon from '../../assets/percent_calc_icon.png'
import length_convert_icon from '../../assets/length_convert_icon.png'
import mass_convert_icon from '../../assets/mass_convert_icon.png'
import speed_convert_icon from '../../assets/speed_convert_icon.png'
import temp_convert_icon from '../../assets/temp_convert_icon.png'


const CalculatorInitial = () => {
    const space = " ";
    const popularCalculators = [
        { icons: age_calc_icon, calc_name: "Age", link: "age-calculator", type: "Calculator"},
        { icons: area_calc_icon, calc_name: "Area", link: "area-calculator", type: "Calculator"},
        { icons: bmi_calc_icon, calc_name: "BMI", link: "bmi-calculator", type: "Calculator"},
        { icons: percent_calc_icon, calc_name: "Percentage", link: "percentage-calculator", type: "Calculator"},
        { icons: currency_convert_icon, calc_name: "Currency", link: "currency-converter", type: "Converter"},
        { icons: length_convert_icon, calc_name: "Length", link: "length-converter", type: "Converter"},
        { icons: mass_convert_icon, calc_name: "Mass", link: "mass-converter", type: "Converter"},
        { icons: speed_convert_icon, calc_name: "Speed", link: "speed-converter", type: "Converter"},
        { icons: temp_convert_icon, calc_name: "Temperature", link: "temperature-converter", type: "Converter"},
    ]

    return (
        <>
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Welcome to CalcPlus!</h1>
                    <p>
                        CalcPlus is a comprehensive online calculator hub, where crunching numbers and converting 
                        units is made simple and convenient. Explore our user-friendly tools to effortlessly solve 
                        your everyday calculations with just a few clicks. Experience the efficiency and accuracy of 
                        our calculators and converters today!
                    </p>
                    <p>
                        You may choose our online calculators from the sidebar or from the following 
                        popular online calculators below:
                    </p>

                    <div className="calc_items_wrap">
                        <h2>Popular Online Calculators</h2>
                        {popularCalculators.map((calculator, index) => (
                            <NavLink 
                              to={calculator.link} 
                              key={index}
                              className="calc_link"
                            >
                              <div className="calc_item_container">
                                <div className="calc_item_image">
                                    <img 
                                      loading="lazy" 
                                      className="calc_item_img"
                                      src={calculator.icons} 
                                      alt={calculator.calc_name}
                                    />
                                </div>
                                <div className="calc_item_name">
                                  <span>{calculator.calc_name}
                                    <span>{space}{calculator.type}</span>
                                  </span>
                                </div>
                              </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CalculatorInitial;