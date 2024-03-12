import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import './custom_input_styles.css'
import arrow_down from "../../assets/expand_more.svg"


const CustomSelectSmall = ({
    selectOptions,
    selectedOption,
    setSelectedOption
}) => {
    const [showOptions, setShowOptions] = useState(false);

    const selectRef = useRef(null);
    const optionsRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if ((optionsRef.current && !optionsRef.current.contains(event.target)) && 
                (selectRef.current && !selectRef.current.contains(event.target))) {
                setShowOptions(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelectClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
    };

    return (
        <>
        <div className="select_small_container">
            <div
                className="select_small_wrap"
                onClick={handleSelectClick}
                ref={selectRef}
            >
                <div>{selectedOption.selectName}</div>
                <img 
                    className="unit_arrow-down"
                    src={arrow_down}
                    alt="select-unit"
                />
            </div>
        </div>
        <AnimatePresence initial={false}>
            {showOptions && (
                <motion.div 
                    className="small_options_list" 
                    ref={optionsRef}
                    initial={{ opacity: 0, height: 0}}
                    animate={{ opacity: 1, height: "auto"}}
                    exit={{ opacity: 0, height: 0}}
                >
                    {selectOptions.map(option => (
                        <div 
                            key={option.selectValue}
                            className="small_options_list_items" 
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.selectName}
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default CustomSelectSmall;