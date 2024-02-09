import "./calculator_styles.css"

// components
import CustomInput from "../../components/custom/custom_input";
import CustomBtnCalculate from "../../components/custom/custom_btn_calculate";
import { useState } from "react";

const AreaCalculator = () => {

    const [inputValue, setInputValue] = useState(0);
    const [unitValue, setUnitValue] = useState("cm");

    const handleInputChange = (value) => {
        console.log('Input value:', value);
        setInputValue(value);
    };
    
    const handleUnitChange = (unit) => {
        console.log('Selected unit:', unit);
        setUnitValue(unit);
    };

    const selectOptions = [
        { option: "cm", option_name: "centimeters" },
        { option: "m", option_name: "meters" },
        { option: "km", option_name: "kilometers" },
        { option: "in", option_name: "inches" },
        { option: "ft", option_name: "feet" },
        { option: "yd", option_name: "yards" },
        { option: "mi", option_name: "miles" },
    ]

    const handleCalculateArea = () => {
        let calculation = inputValue * inputValue;
        let result = calculation + " " + unitValue;
        console.log(result);
    }

    return (
        <>
            <div className="pages_wrap">
                <div className="pages_container">
                    <div className="pages_description_wrap">
                        <h1>Area Calculator</h1>
                        <p>
                            An Area Calculator is designed to compute the amount of space
                            enclosed within a two-dimensional shape. It is commonly used in fields such as architecture,
                            engineering, construction, and mathematics to quickly determine the surface area of various
                            shapes like squares, rectangles, triangles, circles, and other polygons.
                        </p>
                    </div>
                    <div className="calc_categories_wrap">
                        <div className="calc_category_container">
                            <div className="calc_category_title">Square</div>
                            <div className="calc_category_content_wrap">
                                <div className="shape_wrap">
                                    <div className="square"></div>
                                </div>
                                <CustomInput
                                    label="Side"
                                    unitOptions={selectOptions}
                                    onInputChange={handleInputChange}
                                    onUnitChange={handleUnitChange}
                                />
                                <div className="calc_category_btns">
                                    <CustomBtnCalculate 
                                        calculate={handleCalculateArea}
                                    />
                                    <button className="clear_btn">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div className="calc_category_container">
                            <div className="calc_category_title">Rectangle</div>
                        </div>
                        <div className="calc_category_container">
                            <div className="calc_category_title">Triangle</div>
                        </div>
                        <div className="calc_category_container">
                            <div className="calc_category_title">Circle</div>
                        </div>
                        <div className="calc_category_container">
                            <div className="calc_category_title">Ellipse</div>
                        </div>
                        <div className="calc_category_container">
                            <div className="calc_category_title">Sector</div>
                        </div>
                        <div className="calc_category_container">
                            <div className="calc_category_title">Trapezoid</div>
                        </div>
                        <div className="calc_category_container">
                            <div className="calc_category_title">Parallelogram</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AreaCalculator;
