const SwiperBtn = ({ direction, onClick, w_h, bg, mt, xaxis }) => {
  const isPrev = direction === "prev";

  const svgPath = isPrev
    ? "M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
    : "M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18";

  return (
    <div
      className={`absolute ${w_h || "lg:w-[60px] lg:h-[60px]"} ${
        bg || "bg-white/50 hover:bg-white border-gray-100 hover:border-gray-300"
      } backdrop-blur-[10px] border rounded-full inline-flex items-center justify-center w-[38px] h-[38px] text-current transition-all duration-200  ease-[cubic-bezier(0.42,0,0.58,1)] z-[1] top-[50%] -translate-y-[50%] ${
        mt || "mt-[22px]"
      } cursor-pointer ${
        isPrev
          ? `lg:pr-px ${xaxis || "lg:-left-[30px]"} -left-2.5 right-auto`
          : `lg:pl-0.5 -right-2.5 ${xaxis || "lg:-right-[30px]"} left-auto`
      }`}
      onClick={onClick}
    >
      <svg
        className="lg:w-7 w-[26px] h-auto object-contain origin-center"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="currentColor"
        fill="none"
      >
        <path
          d={svgPath}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default SwiperBtn;
