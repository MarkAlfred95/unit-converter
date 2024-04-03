import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";
import volume_figure from "../../../assets/volume_figure_cone.png";

import useLengthConverter from "../../../hooks/useLengthConverter";

const VolumeCone = ({
    pi,
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueConeB, setInputValueConeB] = useState(0);
    const [unitValueConeB, setUnitValueConeB] = useState("centimeters");
    const handleInputChangeConeB = (value) => {
        setInputValueConeB(value);
    };
    const handleUnitChangeConeB = (unit) => {
        setUnitValueConeB(unit);
    };
    const [inputValueConeH, setInputValueConeH] = useState(0);
    const [unitValueConeH, setUnitValueConeH] = useState("centimeters");
    const handleInputChangeConeH = (value) => {
        setInputValueConeH(value);
    };
    const handleUnitChangeConeH = (unit) => {
        setUnitValueConeH(unit);
    };

    const convertedValue = useLengthConverter(inputValueConeH, unitValueConeH, unitValueConeB);
    const handleCalculateVolume_Cone = () => {
        const calculation = ((1/3) * pi * (inputValueConeB * inputValueConeB) * convertedValue).toFixed(6);
        const result = calculation + " cubic " + unitValueConeB;

        setResultTitle("Volume of Cone");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Volume of Cone Formula: <b>V = 1/3πr²h</b></div>
                <div className="result_text">V = 1/3πr²h</div>
                <div className="result_text">V = 1/3 × π × {inputValueConeB}² × {convertedValue}</div>
                <div className="result_text">V = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [valueB, setValueB] = useState('');
    const [unitB, setUnitB] = useState(selectOptions[0]);
    const [valueH, setValueH] = useState('');
    const [unitH, setUnitH] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueConeB(0);
        setUnitValueConeB("centimeters");
        setInputValueConeH(0);
        setUnitValueConeH("centimeters");
        setValueB('');
        setUnitB(selectOptions[0]);
        setValueH('');
        setUnitH(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Cone</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <img
                        loading="lazy"
                        style={{ width: "10rem" }}
                        src={volume_figure}
                        alt="cone volume" 
                    />
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Base Radius"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeConeB}
                        onUnitChange={handleUnitChangeConeB}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                    <CustomInput
                        label="Height"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeConeH}
                        onUnitChange={handleUnitChangeConeH}
                        value={valueH}
                        setValue={setValueH}
                        unit={unitH}
                        setUnit={setUnitH}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateVolume_Cone}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default VolumeCone;