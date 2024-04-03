import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
};

const ResultModal = ({resultTitle, calculationResult, solution, handleClose, variant}) => {
  return (
    <motion.div 
      className="result_wrap"
      onClick={handleClose}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <motion.div 
        className="result_container"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>Calculation Results</h1>
        <p className="result_title">{resultTitle}</p>
        <p className="result_text">{variant === "volume" ? 'V' : 'A'} = <b>{calculationResult}</b></p>
        <p className="result_title">Solution</p>
        <div>{solution}</div>
        <div className="result_btn_wrap">
          <motion.button 
            className="close_btn"
            whileHover={{scale: 1.05}} 
            whileTap={{scale: 0.95}}
            onClick={handleClose}
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ResultModal;
