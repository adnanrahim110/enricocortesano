import { motion } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MotionLink = motion.create(
  forwardRef((props, ref) => <Link ref={ref} {...props} />)
);
const AnimatedText = ({
  as: Component = "span",
  text,
  delay = 0,
  duration = 0.02,
  className = "",
  timing,
  yaxis,
  ...props
}) => {
  const wordArray = text.split(" ");

  const MotionComponent =
    Component === Link ? MotionLink : motion.create(Component);

  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef(false);

  useEffect(() => {
    if (!animationRef.current) {
      animationRef.current = true;
      setHasAnimated(true);
    }
  }, []);

  return (
    <MotionComponent className={className}>
      {wordArray.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          style={{ display: "inline-block" }}
          className="inline-block whitespace-nowrap"
          {...props}
        >
          {word.split("").map((char, index) => (
            <motion.span
              key={`${wordIndex}-${index}`}
              initial={{ opacity: 0, y: yaxis ? yaxis : 2 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: delay + index * duration,
                duration: timing ? timing : 0.8,
                ease: "easeOut",
              }}
              {...props}
              className="inline-block relative"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex !== wordArray.length - 1 && <>&nbsp;</>}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default AnimatedText;
