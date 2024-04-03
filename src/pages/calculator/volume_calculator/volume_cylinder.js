import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";
import volume_figure from "../../../assets/volume_figure_cylinder.png";

import useLengthConverter from "../../../hooks/useLengthConverter";

const VolumeCylinder = ({
    pi,
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueCylinderB, setInputValueCylinderB] = useState(0);
    const [unitValueCylinderB, setUnitValueCylinderB] = useState("centimeters");
    const handleInputChangeCylinderB = (value) => {
        setInputValueCylinderB(value);
    };
    const handleUnitChangeCylinderB = (unit) => {
        setUnitValueCylinderB(unit);
    };
    const [inputValueCylinderH, setInputValueCylinderH] = useState(0);
    const [unitValueCylinderH, setUnitValueCylinderH] = useState("centimeters");
    const handleInputChangeCylinderH = (value) => {
        setInputValueCylinderH(value);
    };
    const handleUnitChangeCylinderH = (unit) => {
        setUnitValueCylinderH(unit);
    };

    const convertedValue = useLengthConverter(inputValueCylinderH, unitValueCylinderH, unitValueCylinderB);
    const handleCalculateVolume_Cylinder = () => {
        const calculation = (pi * (inputValueCylinderB * inputValueCylinderB) * convertedValue).toFixed(6);
        const result = calculation + " cubic " + unitValueCylinderB;

        setResultTitle("Volume of Cylinder");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Volume of Cylinder Formula: <b>V = πr²h</b></div>
                <div className="result_text">V = πr²h</div>
                <div className="result_text">V = π × {inputValueCylinderB}² × {convertedValue}</div>
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
        setInputValueCylinderB(0);
        setUnitValueCylinderB("centimeters");
        setInputValueCylinderH(0);
        setUnitValueCylinderH("centimeters");
        setValueB('');
        setUnitB(selectOptions[0]);
        setValueH('');
        setUnitH(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Cylinder</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <img
                        loading="lazy"
                        style={{ width: "10rem" }}
                        src={volume_figure}
                        alt="cylinder volume" 
                    />
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Base Radius"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeCylinderB}
                        onUnitChange={handleUnitChangeCylinderB}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                    <CustomInput
                        label="Height"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeCylinderH}
                        onUnitChange={handleUnitChangeCylinderH}
                        value={valueH}
                        setValue={setValueH}
                        unit={unitH}
                        setUnit={setUnitH}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateVolume_Cylinder}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default VolumeCylinder;