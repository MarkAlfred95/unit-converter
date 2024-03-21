import './calculator_styles.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

import area_calc_icon from '../../assets/area_calc_icon.png'
import age_calc_icon from '../../assets/age_calc_icon.png'
import average_calc_icon from '../../assets/average_calc_icon.png'
import bmi_calc_icon from '../../assets/bmi_calc_icon.png'
// import date_calc_icon from '../../assets/date_calc_icon.png'
import discount_calc_icon from '../../assets/discount_calc_icon.png'
import investment_calc_icon from '../../assets/investment_calc_icon.png'
import percent_calc_icon from '../../assets/percent_calc_icon.png'
import salary_calc_icon from '../../assets/salary_calc_icon.png'
// import time_calc_icon from '../../assets/time_calc_icon.png'
import vat_calc_icon from '../../assets/vat_calc_icon.png'
// import volume_calc_icon from '../../assets/volume_calc_icon.png'

import currency_convert_icon from '../../assets/currency_convert_icon.png'
import data_convert_icon from '../../assets/data_convert_icon.png'
import length_convert_icon from '../../assets/length_convert_icon.png'
import mass_convert_icon from '../../assets/mass_convert_icon.png'
import speed_convert_icon from '../../assets/speed_convert_icon.png'
import temp_convert_icon from '../../assets/temp_convert_icon.png'
import time_convert_icon from '../../assets/time_convert_icon.png'
import volume_convert_icon from '../../assets/volume_convert_icon.png'

const Calculators = () => {

  const space = " ";
  const calculators = [
    { icons: age_calc_icon, calc_name: "Age", link: "calculator/age-calculator", type: "Calculator"},
    { icons: area_calc_icon, calc_name: "Area", link: "calculator/area-calculator", type: "Calculator"},
    { icons: average_calc_icon, calc_name: "Average", link: "calculator/average-calculator", type: "Calculator"},
    { icons: bmi_calc_icon, calc_name: "BMI", link: "calculator/bmi-calculator", type: "Calculator"},
    // { icons: date_calc_icon, calc_name: "Date", link: "calculator/date-calculator", type: "Calculator"},
    { icons: discount_calc_icon, calc_name: "Discount", link: "calculator/discount-calculator", type: "Calculator"},
    { icons: investment_calc_icon, calc_name: "Investment", link: "calculator/investment-calculator", type: "Calculator"},
    { icons: percent_calc_icon, calc_name: "Percentage", link: "calculator/percentage-calculator", type: "Calculator"},
    { icons: salary_calc_icon, calc_name: "Salary", link: "calculator/salary-calculator", type: "Calculator"},
    // { icons: time_calc_icon, calc_name: "Time", link: "calculator/time-calculator", type: "Calculator"},
    { icons: vat_calc_icon, calc_name: "VAT", link: "calculator/vat-calculator", type: "Calculator"},
    // { icons: volume_calc_icon, calc_name: "Volume", link: "calculator/volume-calculator", type: "Calculator"},
    { icons: currency_convert_icon, calc_name: "Currency", link: "calculator/currency-converter", type: "Converter"},
    { icons: data_convert_icon, calc_name: "Data", link: "calculator/data-converter", type: "Converter"},
    { icons: length_convert_icon, calc_name: "Length", link: "calculator/length-converter", type: "Converter"},
    { icons: mass_convert_icon, calc_name: "Mass", link: "calculator/mass-converter", type: "Converter"},
    { icons: speed_convert_icon, calc_name: "Speed", link: "calculator/speed-converter", type: "Converter"},
    { icons: temp_convert_icon, calc_name: "Temperature", link: "calculator/temperature-converter", type: "Converter"},
    { icons: time_convert_icon, calc_name: "Time", link: "calculator/time-converter", type: "Converter"},
    { icons: volume_convert_icon, calc_name: "Volume", link: "calculator/volume-converter", type: "Converter"}
  ]

  const [activeItem, setActiveItem] = useState('All');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  // Filter calculators based on activeItem
  const filteredCalculators = activeItem === 'All' ? calculators :
    calculators.filter(calculator => calculator.type === activeItem);

  // Sort filtered calculators alphabetically by calc_name
  filteredCalculators.sort((a, b) => a.calc_name.localeCompare(b.calc_name));

  return (
    <section id="calculators">
      <div className="calculator_wrap">
        <div className="calculator_container">
          <h1>Online Calculators</h1>

          <div className="calculator_nav">
            <div
              className={`calculator_nav_items ${activeItem === 'All' ? 'calc_nav_active' : ''}`}
              onClick={() => handleItemClick('All')}
            >
              All
            </div>
            <div
              className={`calculator_nav_items ${activeItem === 'Calculator' ? 'calc_nav_active' : ''}`}
              onClick={() => handleItemClick('Calculator')}
            >
              Calculators
            </div>
            <div
              className={`calculator_nav_items ${activeItem === 'Converter' ? 'calc_nav_active' : ''}`}
              onClick={() => handleItemClick('Converter')}
            >
              Converters
            </div>
          </div>

          <div className="calc_items_wrap">
            {filteredCalculators.map((calculator, index) => (
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
                    {/* <span>{calculator.type}</span> */}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculators;
