import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

import useLengthConverter from "../../../hooks/useLengthConverter";

const AreaEllipse = ({
    pi,
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueEllA, setInputValueEllA] = useState(0);
    const [unitValueEllA, setUnitValueEllA] = useState("centimeters");
    const handleInputChangeEllA = (value) => {
        setInputValueEllA(value);
    };
    const handleUnitChangeEllA = (unit) => {
        setUnitValueEllA(unit);
    };
    const [inputValueEllB, setInputValueEllB] = useState(0);
    const [unitValueEllB, setUnitValueEllB] = useState("centimeters");
    const handleInputChangeEllB = (value) => {
        setInputValueEllB(value);
    };
    const handleUnitChangeEllB = (unit) => {
        setUnitValueEllB(unit);
    };

    const convertedValue = useLengthConverter(inputValueEllB, unitValueEllB, unitValueEllA);
    const handleCalculateArea_Ellipse = () => {
        const calculation = (pi * (inputValueEllA * convertedValue)).toFixed(6);
        const result = calculation + " square " + unitValueEllA;
        
        setResultTitle("Area of Ellipse");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Area of Ellipse Formula: <b>A = πab</b></div>
                <div className="result_text">A = πab</div>
                <div className="result_text">A = π × {inputValueEllA} × {convertedValue}</div>
                <div className="result_text">A = {inputValueEllA * convertedValue}π</div>
                <div className="result_text">A = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [valueA, setValueA] = useState('');
    const [unitA, setUnitA] = useState(selectOptions[0]);
    const [valueB, setValueB] = useState('');
    const [unitB, setUnitB] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueEllA(0);
        setUnitValueEllA("centimeters");
        setInputValueEllB(0);
        setUnitValueEllB("centimeters");
        setValueA('');
        setUnitA(selectOptions[0]);
        setValueB('');
        setUnitB(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Ellipse</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <div className="ellipse"></div>
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Major Radius"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeEllA}
                        onUnitChange={handleUnitChangeEllA}
                        value={valueA}
                        setValue={setValueA}
                        unit={unitA}
                        setUnit={setUnitA}
                    />
                    <CustomInput
                        label="Minor Radius"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeEllB}
                        onUnitChange={handleUnitChangeEllB}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Ellipse}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaEllipse;