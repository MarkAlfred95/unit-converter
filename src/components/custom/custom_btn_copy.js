import { motion } from "framer-motion";

const CustomBtnCopy = ({copy}) => {

  return (
    <motion.button
      whileHover={{scale: 1.05}} 
      whileTap={{scale: 0.95}}
      className="calculate_btn" 
      onClick={copy}
    >
      Copy
    </motion.button>
  )
}

export default CustomBtnCopy;
