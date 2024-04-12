import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../calculator_styles.css"

// components
import ResultModal from "../../../components/custom/result_modal";
import VolumeCube from "./volume_cube";
import VolumeSphere from "./volume_sphere";
import VolumeCone from "./volume_cone";
import VolumeCylinder from "./volume_cylinder";
import VolumeRectangularBox from "./volume_rectangular_box";
import VolumeEllipsoid from "./volume_ellipsoid";
import ScrollToTop from "../../../components/scrolltotop";

const VolumeCalculator = () => {

    const pi = Math.PI;

    const selectOptions = [
        { option: "cm", option_name: "centimeters" },
        { option: "m", option_name: "meters" },
        { option: "km", option_name: "kilometers" },
        { option: "in", option_name: "inches" },
        { option: "ft", option_name: "feet" },
        { option: "yd", option_name: "yards" },
        { option: "mi", option_name: "miles" },
    ]

    // For the Result Modal
    const [modalOpen, setModalOpen] = useState(false);
    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);

    const [resultTitle, setResultTitle] = useState("Area of Square");
    const [calculationResult, setCalculationResult] = useState(0);
    const [solution, setSolution] = useState(null);

    return (
        <>
            <ScrollToTop />
            <div className="pages_wrap">
                <div className="pages_container">
                    <div className="pages_description_wrap">
                        <h1>Volume Calculator</h1>
                        <p>
                            A Volume Calculator is a practical tool or application designed to compute the volume 
                            of various three-dimensional shapes and objects. It enables users to determine the 
                            amount of space enclosed by shapes such as cubes, spheres, cylinders, cones, and 
                            etc. by inputting relevant dimensions such as length, width, and height. 
                        </p>
                    </div>
                    <div className="calc_categories_wrap">
                        <VolumeCube 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <VolumeSphere 
                            pi = {pi}
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <VolumeCone
                            pi = {pi} 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        /> 
                        <VolumeCylinder
                            pi = {pi} 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <VolumeRectangularBox 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <VolumeEllipsoid
                            pi = {pi}
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        /> 
                    </div>
                </div>
            </div>
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpen && 
                    <ResultModal
                        modalOpen={modalOpen}
                        resultTitle={resultTitle} 
                        calculationResult={calculationResult}
                        solution={solution}
                        handleClose={close}
                        variant="volume"
                    />
                }
            </AnimatePresence>
        </>
    );
};

export default VolumeCalculator;