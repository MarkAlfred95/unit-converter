import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

const AreaSquare = ({
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValue, setInputValue] = useState(0);
    const [unitValue, setUnitValue] = useState("centimeters");

    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const handleUnitChange = (unit) => {
        setUnitValue(unit);
    };

    const handleCalculateArea_Square = () => {
        let calculation = inputValue * inputValue;
        let result = calculation + " square " + unitValue;
        setResultTitle("Area of Square");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Area of Square Formula: <b>A = a^2</b></div>
                <div className="result_text">A = a^2</div>
                <div className="result_text">A = {inputValue}^2</div>
                <div className="result_text">A = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [value, setValue] = useState('');
    const [unit, setUnit] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValue(0);
        setUnitValue("centimeters");
        setValue('');
        setUnit(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Square</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <div className="square"></div>
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Side"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChange}
                        onUnitChange={handleUnitChange}
                        value={value}
                        setValue={setValue}
                        unit={unit}
                        setUnit={setUnit}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Square}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaSquare;