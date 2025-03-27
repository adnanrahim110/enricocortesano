import { AnimatePresence, motion } from "framer-motion";

const AnimatedText = ({
  text,
  letterVariants,
  containerVariants,
  className,
}) => {
  const letters = text.split("");
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex overflow-hidden ${className || ""}`}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hamburger = ({ isMenuOpen }) => {
  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
    exit: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const menuLetterVariants = {
    initial: { y: -15, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: 0, delay: 0 } },
  };

  const goBackLetterVariants = {
    initial: { y: 15, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: 0, delay: 0 } },
  };

  return (
    <button className="flex items-center relative ml-[80px] text-black cursor-pointer">
      <span className="relative h-[26px] text-inherit *:z-[3] *:h-[26px] *:absolute *:top-0 *:right-0 *:whitespace-nowrap *:font-medium">
        <AnimatePresence exitBeforeEnter>
          {!isMenuOpen ? (
            <AnimatedText
              key="menu"
              text="Menu"
              letterVariants={menuLetterVariants}
              containerVariants={containerVariants}
              className={
                "group-hover:text-primary-500 transition-all duration-200 ease-in-out"
              }
            />
          ) : (
            <AnimatedText
              key="goback"
              text="GoBack"
              letterVariants={goBackLetterVariants}
              containerVariants={containerVariants}
              className={
                "text-primary-100 group-hover:text-white transition-all duration-200 ease-in-out"
              }
            />
          )}
        </AnimatePresence>
      </span>
      <span className="block w-[30px] h-[22px] relative ml-8">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={`block absolute h-[2.5px] w-full transition-all duration-500 ease-[cubic-bezier(.19,1,.22,1)] nth-[2]:top-[50%] nth-[2]:-translate-y-[1.5px] z-[1] ${
              isMenuOpen
                ? i === 0
                  ? "top-[50%] -translate-y-[1.5px] rotate-45 bg-primary-100 group-hover:bg-white"
                  : i === 1
                  ? "opacity-0"
                  : i === 2
                  ? "top-[50%] -translate-y-[1.5px] -rotate-45 bg-primary-100 group-hover:bg-white"
                  : ""
                : i === 0
                ? "top-0 bg-black group-hover:bg-primary-500"
                : i === 1
                ? "top-[50%] -translate-y-[1.5px] opacity-100 bg-black group-hover:bg-primary-500"
                : i === 2
                ? "top-full -translate-y-[3px] bg-black group-hover:bg-primary-500"
                : ""
            }`}
          ></span>
        ))}
      </span>
    </button>
  );
};

export default Hamburger;
