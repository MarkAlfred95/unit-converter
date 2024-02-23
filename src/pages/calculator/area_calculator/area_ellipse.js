import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

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
    const handleCalculateArea_Ellipse = () => {
        let calculation = 0;
        let result = "";
        if (unitValueEllA === unitValueEllB){
            calculation = (pi * (inputValueEllA * inputValueEllB)).toFixed(6);
            result = calculation + " square " + unitValueEllA;
        }
        else{
            result = "Length conversion not yet available";
        }
        setResultTitle("Area of Ellipse");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Area of Ellipse Formula: <b>A = πab</b></div>
                <div className="result_text">A = πab</div>
                <div className="result_text">A = π × {inputValueEllA} × {inputValueEllB}</div>
                <div className="result_text">A = {inputValueEllA * inputValueEllB}π</div>
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