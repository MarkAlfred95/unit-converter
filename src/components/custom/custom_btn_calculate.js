import { motion } from "framer-motion";

const CustomBtnCalculate = ({calculate}) => {
  return (
    <motion.button
      whileHover={{scale: 1.05}} 
      whileTap={{scale: 0.95}}
      className="calculate_btn" 
      onClick={calculate}
    >
      Calculate
    </motion.button>
  )
}

export default CustomBtnCalculate;
