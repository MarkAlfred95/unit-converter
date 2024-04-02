import { NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './layout_styles.css'

import age_calc_icon from '../assets/age_calc_icon.png'
import area_calc_icon from '../assets/area_calc_icon.png'
import average_calc_icon from '../assets/average_calc_icon.png'
import bmi_calc_icon from '../assets/bmi_calc_icon.png'
import currency_convert_icon from '../assets/currency_convert_icon.png'
// import date_calc_icon from '../assets/date_calc_icon.png'
import discount_calc_icon from '../assets/discount_calc_icon.png'
import investment_calc_icon from '../assets/investment_calc_icon.png'
import percent_calc_icon from '../assets/percent_calc_icon.png'
import salary_calc_icon from '../assets/salary_calc_icon.png'
import time_calc_icon from '../assets/time_calc_icon.png'
import vat_calc_icon from '../assets/vat_calc_icon.png'
// import volume_calc_icon from '../assets/volume_calc_icon.png'
import arrow from '../assets/arrow_back.svg'

import data_convert_icon from '../assets/data_convert_icon.png'
import length_convert_icon from '../assets/length_convert_icon.png'
import mass_convert_icon from '../assets/mass_convert_icon.png'
import speed_convert_icon from '../assets/speed_convert_icon.png'
import temp_convert_icon from '../assets/temp_convert_icon.png'
import time_convert_icon from '../assets/time_convert_icon.png'
import volume_convert_icon from '../assets/volume_convert_icon.png'

const CalculatorLayout = () => {

    const calculators = [
        { icons: age_calc_icon, calc_name: "Age", link: "age-calculator", type: "Calculator"},
        { icons: area_calc_icon, calc_name: "Area", link: "area-calculator", type: "Calculator"},
        { icons: average_calc_icon, calc_name: "Average", link: "average-calculator", type: "Calculator"},
        { icons: bmi_calc_icon, calc_name: "BMI", link: "bmi-calculator", type: "Calculator"},
        // { icons: date_calc_icon, calc_name: "Date", link: "date-calculator", type: "Calculator"},
        { icons: discount_calc_icon, calc_name: "Discount", link: "discount-calculator", type: "Calculator"},
        { icons: investment_calc_icon, calc_name: "Investment", link: "investment-calculator", type: "Calculator"},
        { icons: percent_calc_icon, calc_name: "Percentage", link: "percentage-calculator", type: "Calculator"},
        { icons: salary_calc_icon, calc_name: "Salary", link: "salary-calculator", type: "Calculator"},
        { icons: time_calc_icon, calc_name: "Time", link: "time-calculator", type: "Calculator"},
        { icons: vat_calc_icon, calc_name: "VAT", link: "vat-calculator", type: "Calculator"},
        // { icons: volume_calc_icon, calc_name: "Volume", link: "volume-calculator", type: "Calculator"},
        { icons: currency_convert_icon, calc_name: "Currency", link: "currency-converter", type: "Converter"},
        { icons: data_convert_icon, calc_name: "Data", link: "data-converter", type: "Converter"},
        { icons: length_convert_icon, calc_name: "Length", link: "length-converter", type: "Converter"},
        { icons: mass_convert_icon, calc_name: "Mass", link: "mass-converter", type: "Converter"},
        { icons: speed_convert_icon, calc_name: "Speed", link: "speed-converter", type: "Converter"},
        { icons: temp_convert_icon, calc_name: "Temperature", link: "temperature-converter", type: "Converter"},
        { icons: time_convert_icon, calc_name: "Time", link: "time-converter", type: "Converter"},
        { icons: volume_convert_icon, calc_name: "Volume", link: "volume-converter", type: "Converter"}
    ]

    const [activeItem, setActiveItem] = useState('All');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    const filteredCalculators = activeItem === 'All' ? calculators :
        calculators.filter(calculator => calculator.type === activeItem);

    filteredCalculators.sort((a, b) => a.calc_name.localeCompare(b.calc_name));

    const sideBtnRef = useRef(null);
    const sideMenuRef = useRef(null);
    const [openMiniSidebar, setOpenMiniSidebar] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if ((sideBtnRef.current && !sideBtnRef.current.contains(event.target)) && 
            sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                setOpenMiniSidebar(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sideBtnRef, sideMenuRef]);

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
                                        <img 
                                            loading='lazy'
                                            className="calc_sidebar_item_icon"
                                            src={calculator.icons} 
                                            alt={calculator.calc_name}
                                        />
                                        <div className="calc_sidebar_item_text">{calculator.calc_name + " " + calculator.type}</div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="mini_sidebar_wrap">
                            <div 
                                className="mini_sidebar"
                                ref={sideMenuRef}
                                style={{
                                    width: openMiniSidebar ? '18rem' : '0',
                                    paddingRight: openMiniSidebar ? '0.25rem' : '0',
                                }}
                            >
                                <div 
                                    className="mini_sidebar_controls"
                                    style={{
                                        transform: openMiniSidebar ? 'translateX(0)' : 'translateX(-18rem)',
                                    }}
                                >
                                    <h1>Calculators</h1>
                                    <div className="calculator_nav-side" style={{ width: "16rem"}}>
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
                                </div>
                                <div 
                                    className="mini_sidebar_content"
                                    style={{
                                        transform: openMiniSidebar ? 'translateX(0)' : 'translateX(-18rem)',
                                    }}
                                >
                                    {filteredCalculators.map((calculator, index) => (
                                        <NavLink
                                            to={calculator.link}
                                            key={index}
                                            className="calc_link-side"
                                        >
                                            <img
                                                loading='lazy'
                                                className="calc_sidebar_item_icon"
                                                src={calculator.icons}
                                                alt={calculator.calc_name}
                                            />
                                            <div className="calc_sidebar_item_text">{calculator.calc_name + " " + calculator.type}</div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                            <div 
                                className="mini_sidebar_btn" 
                                ref={sideBtnRef}
                                onClick={() => setOpenMiniSidebar(!openMiniSidebar)}
                            >
                                <img 
                                    className="mini_sidebar_btn_img"
                                    src={arrow} 
                                    alt={"arrow"}
                                    style={{
                                        transform: openMiniSidebar ? 'rotateZ(0)' : 'rotateZ(180deg)',
                                    }}
                                />
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
