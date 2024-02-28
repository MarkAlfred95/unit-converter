import { useState, useEffect, useRef } from "react";

import './custom_input_styles.css'
import arrow_down from "../../assets/expand_more.svg"


const CustomSelect = ({
    selectOptions,
    selectedOption,
    setSelectedOption
}) => {

    // const [selectedOption, setSelectedOption] = useState(selectOptions[0]);
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
        <div className="unit_container">
            <div 
                className="selected_option" 
                onClick={handleSelectClick}
                ref={selectRef}
            >
                <div>
                    <div className="unit_symbol">{selectedOption.option}</div>
                    <div className="unit_name">{selectedOption.option_name}</div>
                    <div className="arrow_down_wrap">
                        <img 
                            className="unit_arrow-down"
                            src={arrow_down}
                            alt="select-unit"
                        />
                    </div>
                </div>
            </div>
            {showOptions && (
                <div className="options_list" ref={optionsRef}>
                    {selectOptions.map(option => (
                        <div 
                            key={option.option}
                            className="options_list_items" 
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.option_name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;