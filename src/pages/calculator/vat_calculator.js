import { useState } from 'react';
import { motion } from 'framer-motion';

import CustomButton from '../../components/custom/custom_button';
import CustomBtnClear from '../../components/custom/custom_btn_clear';
import ScrollToTop from '../../components/scrolltotop';

const VATCalculator = () => {
    const [isVAT, setIsVAT] = useState(true);
    const [vatRate, setVatRate] = useState('');
    const [priceBeforeVAT, setPriceBeforeVAT] = useState('');
    const [priceWithVAT, setPriceWithVAT] = useState('');

    const [vatAmount, setVATAmount] = useState(0);
    const [vatAmountEx, setVATAmountEx] = useState(0);
    const [inclusivePrice, setInclusivePrice] = useState(0);
    const [exclusivePrice, setExclusivePrice] = useState(0);

    const calculateDiscount = () => {
        if (isVAT) {
            const calculatedVAT = (priceBeforeVAT * vatRate) / 100;
            const priceAfterVAT = priceBeforeVAT + calculatedVAT;
            setInclusivePrice(priceAfterVAT);
            setVATAmount(calculatedVAT);
        }
        else {
            const priceAfterVAT= (priceWithVAT / (100 + vatRate)) * 100;
            const calculatedVAT = priceWithVAT - priceAfterVAT;
            setExclusivePrice(priceAfterVAT.toFixed(3));
            setVATAmountEx(calculatedVAT.toFixed(3));
        }
    };

    const inclusiveResult = [
        {result_name: "VAT inclusive price", result: inclusivePrice},
        {result_name: "The VAT amount is", result: vatAmount},
    ]

    const exclusiveResult = [
        {result_name: "VAT exlusive price", result: exclusivePrice},
        {result_name: "The VAT amount is", result: vatAmountEx},
    ]

    const setIsVATValues = () => {
        setIsVAT(!isVAT);
    }

    const handleClear = () => {
        setVatRate(0);
        setPriceBeforeVAT(0);
        setPriceWithVAT(0)
        setInclusivePrice(0);
        setExclusivePrice(0);
        setVATAmount(0);
        setVATAmountEx(0);
    }

    return (
        <>
        <ScrollToTop />
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>VAT Calculator</h1>
                    <p>
                    A VAT (Value Added Tax) Calculator is a practical tool used to compute the amount of VAT 
                    to be added to a given price or the total price including VAT. It enables users to quickly 
                    and accurately calculate the VAT amount based on the VAT rate and the initial price of a 
                    product or service.
                    </p>
                </div>
                <div className="calc_container">
                    <div className="discount_calc_wrap">
                        <div className="discount_calc_inputs_wrap">
                            <div className="bmi_unit_system_select">
                                <button
                                    onClick={setIsVATValues}
                                    style={{
                                        backgroundColor: isVAT ? '#1B262C' : 'white',
                                        color: isVAT ? 'white' : '#1B262C',
                                    }}
                                >Price with VAT
                                </button>
                                <button
                                    onClick={setIsVATValues}
                                    style={{
                                        backgroundColor: !isVAT ? '#1B262C' : 'white',
                                        color: !isVAT ? 'white' : '#1B262C',
                                    }}
                                >Price without VAT
                                </button>
                            </div>
                            <div className="discount_input_wrap">
                                <p>VAT Rate (%):</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={vatRate.toString()}
                                    onChange={(e) => {
                                        const value = parseFloat(e.target.value);
                                        setVatRate(isNaN(value) ? '' : value);
                                    }}
                                />
                            </div>
                            <div>
                                {isVAT && 
                                    <motion.div 
                                        className="discount_input_wrap"
                                        initial={{ opacity: 0, x: "-5rem" }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <p>Price before VAT:</p>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={priceBeforeVAT.toString()}
                                            onChange={(e) => {
                                                const value = parseFloat(e.target.value);
                                                setPriceBeforeVAT(isNaN(value) ? '' : value);
                                            }}
                                        />
                                    </motion.div>
                                }
                                {!isVAT &&
                                    <motion.div 
                                        className="discount_input_wrap"
                                        initial={{ opacity: 0, x: "-5rem" }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <p>Price with VAT:</p>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={priceWithVAT.toString()}
                                            onChange={(e) => {
                                                const value = parseFloat(e.target.value);
                                                setPriceWithVAT(isNaN(value) ? '' : value);
                                            }}
                                        />
                                    </motion.div>
                                }
                            </div>
                            <div className="bmi_btn_wrap">
                                <CustomButton
                                    btn_name={"Calculate"}
                                    click={calculateDiscount} 
                                />
                                <CustomBtnClear 
                                    clear={handleClear}
                                />
                            </div>
                        </div>

                        <div className="calc_table_wrap">
                            {isVAT &&
                            <motion.table 
                                className="bmi_table"
                                initial={{ opacity: 0, x: "5rem" }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <tbody>
                                  {inclusiveResult.map((row, index) => (
                                    <tr key={index}>
                                      <td>{row.result_name}</td>
                                      <td>{row.result}</td>
                                    </tr>
                                  ))}
                                </tbody>
                            </motion.table>
                            }
                            {!isVAT &&
                            <motion.table 
                                className="bmi_table"
                                initial={{ opacity: 0, x: "5rem" }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <tbody>
                                  {exclusiveResult.map((row, index) => (
                                    <tr key={index}>
                                      <td>{row.result_name}</td>
                                      <td>{row.result}</td>
                                    </tr>
                                  ))}
                                </tbody>
                            </motion.table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default VATCalculator;
