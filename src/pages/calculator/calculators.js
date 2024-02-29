import './calculator_styles.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const Calculators = () => {

  const calculators = [
    { icons: "sample", calc_name: "Age", link: "calculator/age-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Area", link: "calculator/area-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Average", link: "calculator/average-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "BMI", link: "calculator/bmi-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Date", link: "calculator/date-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Discount", link: "calculator/discount-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Investment", link: "calculator/investment-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Percentage", link: "calculator/percentage-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Salary", link: "calculator/salary-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Time", link: "calculator/time-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "VAT", link: "calculator/vat-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Volume", link: "calculator/volume-calculator", type: "Calculator"},
    { icons: "sample", calc_name: "Currency", link: "calculator/currency-converter", type: "Converter"},
    { icons: "sample", calc_name: "Data", link: "calculator/data-converter", type: "Converter"},
    { icons: "sample", calc_name: "Length", link: "calculator/length-converter", type: "Converter"},
    { icons: "sample", calc_name: "Mass", link: "calculator/mass-converter", type: "Converter"},
    { icons: "sample", calc_name: "Speed", link: "calculator/speed-converter", type: "Converter"},
    { icons: "sample", calc_name: "Temperature", link: "calculator/temperature-converter", type: "Converter"},
    { icons: "sample", calc_name: "Time", link: "calculator/time-converter", type: "Converter"},
    { icons: "sample", calc_name: "Volume", link: "calculator/volume-converter", type: "Converter"}
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
          <h1>Choose Calculator</h1>

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
                  <div className="calc_item_image"></div>
                  <div className="calc_item_name">
                    <span>{calculator.calc_name}</span>
                    <span>{calculator.type}</span>
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
