import { useState } from 'react';
import CustomButton from '../../components/custom/custom_button';
import CustomBtnClear from '../../components/custom/custom_btn_clear';
import ScrollToTop from '../../components/scrolltotop';

const AverageCalculator = () => {
    const [inputNumbers, setInputNumbers] = useState('');
    const [average, setAverage] = useState(0);
    const [sum, setSum] = useState(0);
    const [count, setCount] = useState(0);
    const [median, setMedian] = useState(0);
    const [geometricMean, setGeometricMean] = useState(0);
    const [largest, setLargest] = useState(0);
    const [smallest, setSmallest] = useState(0);
    const [range, setRange] = useState(0);

    const calculateStats = () => {
        const numbersArray = inputNumbers.split(' ').map(Number);
        const count = numbersArray.length;
        const sum = numbersArray.reduce((acc, val) => acc + val, 0);
        const average = sum / count;
        const sortedArray = numbersArray.sort((a, b) => a - b);
        const median = count % 2 === 0 ? (sortedArray[count / 2 - 1] + sortedArray[count / 2]) / 2 : sortedArray[Math.floor(count / 2)];
        const geometricMean = Math.pow(numbersArray.reduce((acc, val) => acc * val, 1), 1 / count);
        const largest = Math.max(...numbersArray);
        const smallest = Math.min(...numbersArray);
        const range = largest - smallest;

        setAverage(average);
        setSum(sum);
        setCount(count);
        setMedian(median);
        setGeometricMean(geometricMean);
        setLargest(largest);
        setSmallest(smallest);
        setRange(range);
    };

    const handleClear = () => {
        setInputNumbers('');
        setAverage(0);
        setSum(0);
        setCount(0);
        setMedian(0);
        setGeometricMean(0);
        setLargest(0);
        setSmallest(0);
        setRange(0);
    }

    const averageValues = [
        {result_name: "Average", result: average},
        {result_name: "Sum", result: sum},
        {result_name: "Count", result: count},
        {result_name: "Median", result: median},
        {result_name: "Geometric Mean", result: geometricMean},
        {result_name: "Largest Number", result: largest},
        {result_name: "Smallest Number", result: smallest},
        {result_name: "Range", result: range},
    ]

    const handleTextAreaKeyDown = (event) => {
        if (
          !(
            (event.key >= '0' && event.key <= '9') ||
            event.key === ' ' ||
            event.key === 'Backspace' ||
            event.key === 'Delete'
          )
        ) {
          event.preventDefault();
        }
    };

    return (
    <>
    <ScrollToTop />
    <div className="pages_wrap">
        <div className="pages_container">
            <div className="pages_description_wrap">
                <h1>Average Calculator</h1>
                <p>
                    An Average Calculator is a practical tool used to compute the arithmetic 
                    mean of a set of numerical values. It facilitates the quick and accurate calculation of 
                    the average by summing up all the values in the dataset and dividing the total by the number 
                    of values. 
                </p>
            </div>
            <div className="calc_container">
                <div className='average_calc_wrap'>
                    <div className="average_textarea_wrap">
                        <p>Please provide numbers separated by space to calculate the average of the numbers.</p>
                        <textarea
                          value={inputNumbers}
                          onChange={(e) => setInputNumbers(e.target.value)}
                          onKeyDown={handleTextAreaKeyDown}
                          placeholder="Enter numbers separated by spaces"
                        ></textarea>
                        <div className="bmi_btn_wrap">
                            <CustomButton
                                btn_name={"Calculate"}
                                click={calculateStats} 
                            />
                            <CustomBtnClear 
                                clear={handleClear}
                            />
                        </div>
                    </div>

                    <div className="calc_table_wrap">
                        <table className="bmi_table">
                            <tbody>
                              {averageValues.map((row, index) => (
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

export default AverageCalculator;