import React, { useState } from 'react';
import * as math from 'mathjs';

import "./hero_styles.css"

const SimpleCalculator = () => {
    const [history, setHistory] = useState('');
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            clearAll();
        } else if (value === 'DEL') {
            deleteLastChar();
        } else if (value === '=') {
            evaluateExpression();
        } else {
            appendToExpression(value);
        }
    };

    const clearAll = () => {
        setExpression('');
        setHistory('');
    };

    const deleteLastChar = () => {
        if (expression === 'Error') {
            clearAll();
        } else {
            setExpression((prevExpression) => prevExpression.slice(0, -1));
        }
    };

    const appendToExpression = (value) => {
        setExpression((prevExpression) => prevExpression + value);
    };

    const evaluateExpression = () => {
        try {
            const result = math.evaluate(expression);
            const roundedResult = parseFloat(result.toFixed(5));

            setHistory(`${expression} = ${roundedResult}`);
            setExpression(String(roundedResult));
        } catch (error) {
            setExpression('Error');
        }
    };

    return (
        <div className="simple_calc_container">
            <div className="simple_calc_screen_wrap">
                <div className="simple_calc_screen">
                    <div className="simple_calc_history">{history}</div>
                    <div className="simple_calc_result">{expression}</div>
                </div>
            </div>

            <div className="simple_calc_btn_wrap">
                <button className="simple_calc_btn" onClick={() => handleButtonClick('C')}>C</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('DEL')}>DEL</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('%')}>%</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('/')}>/</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('7')}>7</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('8')}>8</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('9')}>9</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('*')}>*</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('4')}>4</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('5')}>5</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('6')}>6</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('-')}>-</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('1')}>1</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('2')}>2</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('3')}>3</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('+')}>+</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('.')}>.</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('0')}>0</button>
                <button className="simple_calc_btn" onClick={() => handleButtonClick('=')}>=</button>
            </div>
        </div>
    );
};

export default SimpleCalculator;