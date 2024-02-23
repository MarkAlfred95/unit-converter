import { motion } from "framer-motion";

const CustomBtnClear = ({clear}) => {
  return (
    <motion.button
      whileHover={{scale: 1.05}} 
      whileTap={{scale: 0.95}}
      className="clear_btn" 
      onClick={clear}
    >
      Clear
    </motion.button>
  )
}

export default CustomBtnClear;
