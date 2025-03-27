import { motion } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MotionLink = motion.create(
  forwardRef((props, ref) => <Link ref={ref} {...props} />)
);
const FadeInView = ({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  duration,
  yaxis,
  xaxis,
  style,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasAnimated.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible]);

  const MotionComponent =
    Component === Link ? MotionLink : motion.create(Component);

  return (
    <MotionComponent
      ref={ref}
      initial={{ opacity: 0, y: yaxis ? yaxis : 30, x: xaxis ? xaxis : 0 }}
      animate={isVisible ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: duration ? duration : 0.8,
        ease: "easeOut",
        delay,
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeInView;
