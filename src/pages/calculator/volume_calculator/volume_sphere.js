import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";
import volume_figure from "../../../assets/volume_figure_sphere.png";

const VolumeSphere = ({
    pi,
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueSphere, setInputValueSphere] = useState(0);
    const [unitValueSphere, setUnitValueSphere] = useState("centimeters");
    const handleInputChangeSphere = (value) => {
        setInputValueSphere(value);
    };
    const handleUnitChangeSphere = (unit) => {
        setUnitValueSphere(unit);
    };
    const handleCalculateVolume_Sphere = () => {
        let calculation = ((4/3) * pi * (inputValueSphere * inputValueSphere * inputValueSphere)).toFixed(6);
        let result = calculation + " cubic " + unitValueSphere;
        setResultTitle("Volume of Sphere");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Volume of Sphere Formula: <b>V = 4/3πr³</b></div>
                <div className="result_text">V = 4/3πr³</div>
                <div className="result_text">V = 4/3 × π × {inputValueSphere}³</div>
                <div className="result_text">V = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [value, setValue] = useState('');
    const [unit, setUnit] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueSphere(0);
        setUnitValueSphere("centimeters");
        setValue('');
        setUnit(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Sphere</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <img
                        loading="lazy"
                        style={{ width: "10rem" }}
                        src={volume_figure}
                        alt="sphere volume" 
                    />
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Radius"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeSphere}
                        onUnitChange={handleUnitChangeSphere}
                        value={value}
                        setValue={setValue}
                        unit={unit}
                        setUnit={setUnit}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateVolume_Sphere}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default VolumeSphere;