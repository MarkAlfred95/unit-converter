import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import './layout_styles.css'

const CalculatorLayout = () => {

    const calculators = [
        { icons: "sample", calc_name: "Age", link: "age-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Area", link: "area-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Average", link: "average-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "BMI", link: "bmi-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Date", link: "date-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Discount", link: "discount-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Investment", link: "investment-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Percentage", link: "percentage-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Salary", link: "salary-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Time", link: "time-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "VAT", link: "vat-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Volume", link: "volume-calculator", type: "Calculator"},
        { icons: "sample", calc_name: "Currency", link: "currency-converter", type: "Converter"},
        { icons: "sample", calc_name: "Data", link: "data-converter", type: "Converter"},
        { icons: "sample", calc_name: "Length", link: "length-converter", type: "Converter"},
        { icons: "sample", calc_name: "Mass", link: "mass-converter", type: "Converter"},
        { icons: "sample", calc_name: "Speed", link: "speed-converter", type: "Converter"},
        { icons: "sample", calc_name: "Temperature", link: "Temperature-converter", type: "Converter"},
        { icons: "sample", calc_name: "Time", link: "time-converter", type: "Converter"},
        { icons: "sample", calc_name: "Volume", link: "volume-converter", type: "Converter"}
    ]

    const [activeItem, setActiveItem] = useState('All');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    const filteredCalculators = activeItem === 'All' ? calculators :
        calculators.filter(calculator => calculator.type === activeItem);

    filteredCalculators.sort((a, b) => a.calc_name.localeCompare(b.calc_name));

    return (
        <div className="calculator-layout">
            <main>
                <div className="calculator_layout_wrap">
                    <div>
                        <div className="calculator_sidebar">
                            <h1>Calculators</h1>
                            <div className="calculator_nav-side">
                                <div
                                    className={`calculator_nav_items-side ${activeItem === 'All' ? 'calc_nav_active-side' : ''}`}
                                    onClick={() => handleItemClick('All')}
                                >
                                All
                                </div>
                                <div
                                    className={`calculator_nav_items-side ${activeItem === 'Calculator' ? 'calc_nav_active-side' : ''}`}
                                    onClick={() => handleItemClick('Calculator')}
                                >
                                Calculators
                                </div>
                                <div
                                    className={`calculator_nav_items-side ${activeItem === 'Converter' ? 'calc_nav_active-side' : ''}`}
                                    onClick={() => handleItemClick('Converter')}
                                >
                                Converters
                                </div>
                            </div>
                            <div className="calc_sidebar_item_wrap">
                                {filteredCalculators.map((calculator, index) => (
                                    <NavLink 
                                        to={calculator.link} 
                                        key={index}
                                        className="calc_link-side"
                                    >
                                        <div className="calc_sidebar_item_icon"></div>
                                        <div className="calc_sidebar_item_text">{calculator.calc_name + " " + calculator.type}</div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="calculator_content">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CalculatorLayout;
