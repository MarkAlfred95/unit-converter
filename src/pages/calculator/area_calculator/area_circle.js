import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

const AreaCircle = ({
    pi,
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueCircle, setInputValueCircle] = useState(0);
    const [unitValueCircle, setUnitValueCircle] = useState("centimeters");
    const handleInputChangeCircle = (value) => {
        setInputValueCircle(value);
    };
    const handleUnitChangeCircle = (unit) => {
        setUnitValueCircle(unit);
    };
    const handleCalculateArea_Circle = () => {
        let calculation = (pi * (inputValueCircle * inputValueCircle)).toFixed(6);
        let result = calculation + " square " + unitValueCircle;
        setResultTitle("Area of Circle");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Area of Circle Formula: <b>A = πr^2</b></div>
                <div className="result_text">A = πr^2</div>
                <div className="result_text">A = π{inputValueCircle}^2</div>
                <div className="result_text">A = {inputValueCircle * inputValueCircle}π</div>
                <div className="result_text">A = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [value, setValue] = useState('');
    const [unit, setUnit] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueCircle(0);
        setUnitValueCircle("centimeters");
        setValue('');
        setUnit(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Circle</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <div className="circle"></div>
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Radius"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeCircle}
                        onUnitChange={handleUnitChangeCircle}
                        value={value}
                        setValue={setValue}
                        unit={unit}
                        setUnit={setUnit}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Circle}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaCircle;