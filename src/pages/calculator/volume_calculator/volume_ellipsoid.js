import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";
import volume_figure from "../../../assets/volume_figure_ellipsoid.png";

import useLengthConverter from "../../../hooks/useLengthConverter";

const VolumeEllipsoid = ({
    pi,
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueAxisA, setInputValueAxisA] = useState(0);
    const [unitValueAxisA, setUnitValueAxisA] = useState("centimeters");
    const handleInputChangeAxisA = (value) => {
        setInputValueAxisA(value);
    };
    const handleUnitChangeAxisA = (unit) => {
        setUnitValueAxisA(unit);
    };
    const [inputValueAxisB, setInputValueAxisB] = useState(0);
    const [unitValueAxisB, setUnitValueAxisB] = useState("centimeters");
    const handleInputChangeAxisB = (value) => {
        setInputValueAxisB(value);
    };
    const handleUnitChangeAxisB = (unit) => {
        setUnitValueAxisB(unit);
    };
    const [inputValueAxisC, setInputValueAxisC] = useState(0);
    const [unitValueAxisC, setUnitValueAxisC] = useState("centimeters");
    const handleInputChangeAxisC = (value) => {
        setInputValueAxisC(value);
    };
    const handleUnitChangeAxisC = (unit) => {
        setUnitValueAxisC(unit);
    };

    const convertedValueAxisB = useLengthConverter(inputValueAxisB, unitValueAxisB, unitValueAxisA);
    const convertedValueAxisC = useLengthConverter(inputValueAxisC, unitValueAxisC, unitValueAxisA);
    const handleCalculateArea_Triangle = () => {
        const calculation = ((4/3) * pi * inputValueAxisA * convertedValueAxisB * convertedValueAxisC).toFixed(6);
        const result = calculation + " cubic " + unitValueAxisA;

        setResultTitle("Volume of Ellipsoid");
        setCalculationResult(result);
        
        const solutionJSX = (
            <>
                <div className="result_text">Volume of Ellipsoid Formula: <b>V = 4/3πabc</b></div>
                <div className="result_text">V = 4/3πabc</div>
                <div className="result_text">V = 4/3 × π × a × b × c</div>
                <div className="result_text">V = 4/3 × π × {inputValueAxisA} × {convertedValueAxisB} × {convertedValueAxisC}</div>
                <div className="result_text">V = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [valueA, setValueA] = useState('');
    const [unitA, setUnitA] = useState(selectOptions[0]);
    const [valueB, setValueB] = useState('');
    const [unitB, setUnitB] = useState(selectOptions[0]);
    const [valueC, setValueC] = useState('');
    const [unitC, setUnitC] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueAxisA(0);
        setUnitValueAxisA("centimeters");
        setInputValueAxisB(0);
        setUnitValueAxisB("centimeters");
        setInputValueAxisC(0);
        setUnitValueAxisC("centimeters");
        setValueA('');
        setUnitA(selectOptions[0]);
        setValueB('');
        setUnitB(selectOptions[0]);
        setValueC('');
        setUnitC(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Ellipsoid</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <img
                        loading="lazy"
                        style={{ width: "10rem" }}
                        src={volume_figure}
                        alt="ellipsoid volume" 
                    />
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Axis a"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeAxisA}
                        onUnitChange={handleUnitChangeAxisA}
                        value={valueA}
                        setValue={setValueA}
                        unit={unitA}
                        setUnit={setUnitA}
                    />
                    <CustomInput
                        label="Axis b"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeAxisB}
                        onUnitChange={handleUnitChangeAxisB}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                    <CustomInput
                        label="Axis c"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeAxisC}
                        onUnitChange={handleUnitChangeAxisC}
                        value={valueC}
                        setValue={setValueC}
                        unit={unitC}
                        setUnit={setUnitC}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Triangle}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default VolumeEllipsoid;