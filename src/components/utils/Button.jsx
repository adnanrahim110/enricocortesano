import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Button = ({ className, href, onClick, children, type, svgClass }) => {
  const classes = `btn ${className || "btn_submit"}`;
  const renderButton = () => (
    <button className={classes} onClick={onClick} type={type}>
      {children}
      <BsFillTriangleFill className={svgClass} />
    </button>
  );
  const renderLink = () => (
    <Link to={href} className={classes}>
      {children}
      <BsFillTriangleFill className={svgClass} />
    </Link>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
