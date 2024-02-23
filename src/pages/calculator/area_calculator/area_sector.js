import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

const AreaSector = ({
    pi,
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const selectOptionsB = [
        { option: "deg", option_name: "degrees" },
    ]

    const [inputValueRad, setInputValueRad] = useState(0);
    const [unitValueRad, setUnitValueRad] = useState("centimeters");
    const handleInputChangeRad = (value) => {
        setInputValueRad(value);
    };
    const handleUnitChangeRad = (unit) => {
        setUnitValueRad(unit);
    };
    const [inputValueDeg, setInputValueDeg] = useState(0);
    const [unitValueDeg, setUnitValueDeg] = useState("degrees");
    const handleInputChangeDeg = (value) => {
        setInputValueDeg(value);
    };
    const handleUnitChangeDeg = (unit) => {
        setUnitValueDeg(unit);
    };
    const handleCalculateArea_Sector = () => {
        const preCalculation = ((inputValueDeg / 360) * (inputValueRad * inputValueRad)).toFixed(6);
        const calculation = (preCalculation * pi).toFixed(6);
        const result = calculation + " square " + unitValueRad;

        setResultTitle("Area of Sector");
        setCalculationResult(result);
        
        const solutionJSX = (
            <>
                <div className="result_text">Area of Sector Formula: <b>A = (θ ÷ 360) × π × r^2</b></div>
                <div className="result_text">A = (θ ÷ 360 {unitValueDeg}) × π × r^2</div>
                <div className="result_text">A = ({inputValueDeg} ÷ 360) × π × {inputValueRad}^2</div>
                <div className="result_text">A = {preCalculation}π</div>
                <div className="result_text">A = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [valueA, setValueA] = useState('');
    const [unitA, setUnitA] = useState(selectOptions[0]);
    const [valueB, setValueB] = useState('');
    const [unitB, setUnitB] = useState(selectOptionsB[0]);

    const handleClear = () => {
        setInputValueRad(0);
        setUnitValueRad("centimeters");
        setInputValueDeg(0);
        setUnitValueDeg("degrees");
        setValueA('');
        setUnitA(selectOptions[0]);
        setValueB('');
        setUnitB(selectOptionsB[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Sector</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <div className="sector"></div>
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Radius"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeRad}
                        onUnitChange={handleUnitChangeRad}
                        value={valueA}
                        setValue={setValueA}
                        unit={unitA}
                        setUnit={setUnitA}
                    />
                    <CustomInput
                        label="Angle"
                        unitOptions={selectOptionsB}
                        onInputChange={handleInputChangeDeg}
                        onUnitChange={handleUnitChangeDeg}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Sector}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaSector;