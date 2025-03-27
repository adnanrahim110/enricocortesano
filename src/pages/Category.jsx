import React from "react";
import Menu from "../components/Menu";

const Category = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Category;
