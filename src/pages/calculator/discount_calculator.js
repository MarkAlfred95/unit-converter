import { useState } from 'react';
import { motion } from 'framer-motion';

import CustomButton from '../../components/custom/custom_button';
import CustomBtnClear from '../../components/custom/custom_btn_clear';

const DiscountCalculator = () => {
    const [isPercent, setIsPercent] = useState(true);
    const [priceBeforeDiscount, setPriceBeforeDiscount] = useState('');
    const [discountValue, setDiscountValue] = useState('');
    const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
    const [savedAmount, setSavedAmount] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);

    const calculateDiscount = () => {
        if (isPercent) {
            const calculatedDiscount = (priceBeforeDiscount * discountValue) / 100;
            const priceAfterDiscount = priceBeforeDiscount - calculatedDiscount;
            setPriceAfterDiscount(priceAfterDiscount);
            setSavedAmount(calculatedDiscount);
            setDiscountPercentage(discountValue);
        }
        else {
            const priceAfterDiscount = priceBeforeDiscount - discountValue;
            const calculatedDiscountPercentage = ((priceBeforeDiscount - priceAfterDiscount) / priceBeforeDiscount) * 100;
            setPriceAfterDiscount(priceAfterDiscount);
            setSavedAmount(discountValue);
            setDiscountPercentage(calculatedDiscountPercentage);
        }
    };

    const discountResult = [
        {result_name: "Price After Discount", result: priceAfterDiscount},
        {result_name: "Discount Percentage", result: discountPercentage + "%"},
        {result_name: "Amount Saved", result: savedAmount},
    ]

    const handleClear = () => {
        setPriceBeforeDiscount('');
        setDiscountValue('');
        setPriceAfterDiscount(0);
        setSavedAmount(0);
        setDiscountPercentage(0);
    }

    return (
        <>
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Discount Calculator</h1>
                    <p>
                        A Discount Calculator is a handy tool used to determine the final price of a product or 
                        service after applying a discount or markdown. It enables users to swiftly compute the 
                        discounted price by inputting the original price and the discount percentage or amount. 
                    </p>
                </div>
                <div className="calc_container">
                    <div className="discount_calc_wrap">
                        <div className="discount_calc_inputs_wrap">
                            <div className="bmi_unit_system_select">
                                <button
                                    onClick={() => setIsPercent(true)}
                                    style={{
                                        backgroundColor: isPercent ? '#1B262C' : 'white',
                                        color: isPercent ? 'white' : '#1B262C',
                                    }}
                                >Percent Off
                                </button>
                                <button
                                    onClick={() => setIsPercent(false)}
                                    style={{
                                        backgroundColor: !isPercent ? '#1B262C' : 'white',
                                        color: !isPercent ? 'white' : '#1B262C',
                                    }}
                                >Fixed Amount Off
                                </button>
                            </div>
                            <div className="discount_input_wrap">
                                <p>Price Before Discount:</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={priceBeforeDiscount.toString()}
                                    onChange={(e) => {
                                        const value = parseFloat(e.target.value);
                                        setPriceBeforeDiscount(isNaN(value) ? '' : value);
                                    }}
                                />
                            </div>
                            <div>
                                {isPercent && 
                                    <motion.div 
                                        className="discount_input_wrap"
                                        initial={{ opacity: 0, x: "-5rem" }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <p>Discount %:</p>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={discountValue.toString()} 
                                            onChange={(e) => {
                                                const value = parseFloat(e.target.value);
                                                setDiscountValue(isNaN(value) ? '' : value);
                                            }}
                                        />
                                    </motion.div>
                                }
                                {!isPercent &&
                                    <motion.div 
                                        className="discount_input_wrap"
                                        initial={{ opacity: 0, x: "-5rem" }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <p>Discount Amount:</p>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={discountValue.toString()} 
                                            onChange={(e) => {
                                                const value = parseFloat(e.target.value);
                                                setDiscountValue(isNaN(value) ? '' : value);
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
                            <table className="bmi_table">
                                <tbody>
                                  {discountResult.map((row, index) => (
                                    <tr key={index}>
                                      <td>{row.result_name}</td>
                                      <td>{row.result}</td>
                                    </tr>
                                  ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DiscountCalculator;
