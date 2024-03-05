import { motion } from "framer-motion";

const CustomButton = ({btn_name, click}) => {
  return (
    <motion.button
      whileHover={{scale: 1.05}} 
      whileTap={{scale: 0.95}}
      className="calculate_btn" 
      onClick={click}
    >
      {btn_name}
    </motion.button>
  )
}

export default CustomButton;
