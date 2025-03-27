import React, { useEffect, useState } from "react";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full items-center justify-center bg-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0 hidden -z-[100]" : "opacity-100 flex z-[10000]"
      }`}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
    </div>
  );
};

export default Loader;
