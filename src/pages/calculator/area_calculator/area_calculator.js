import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../calculator_styles.css"

// components
import ResultModal from "../../../components/custom/result_modal";
import AreaSquare from "./area_square";
import AreaCircle from "./area_circle";
import AreaRectangle from "./area_rectangle";
import AreaParallelogram from "./area_parallelogram";
import AreaTrapezoid from "./area_trapezoid";
import AreaEllipse from "./area_ellipse";
import AreaTriangle from "./area_triangle";
import AreaSector from "./area_sector";
import ScrollToTop from "../../../components/scrolltotop";

const AreaCalculator = () => {

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
                        <h1>Area Calculator</h1>
                        <p>
                            An Area Calculator is designed to compute the amount of space
                            enclosed within a two-dimensional shape. It is commonly used in fields such as architecture,
                            engineering, construction, and mathematics to quickly determine the surface area of various
                            shapes like squares, rectangles, triangles, circles, and other polygons.
                        </p>
                    </div>
                    <div className="calc_categories_wrap">
                        <AreaSquare 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <AreaCircle 
                            pi = {pi}
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <AreaRectangle 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <AreaParallelogram 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />                        
                        <AreaTriangle 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <AreaTrapezoid 
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <AreaEllipse 
                            pi = {pi}
                            selectOptions = {selectOptions}
                            modalOpen = {modalOpen}
                            open = {open}
                            close = {close}
                            setResultTitle = {setResultTitle}
                            setCalculationResult = {setCalculationResult}
                            setSolution = {setSolution}
                        />
                        <AreaSector
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
                        variant="area"
                    />
                }
            </AnimatePresence>
        </>
    );
};

export default AreaCalculator;