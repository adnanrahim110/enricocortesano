import React from "react";
import Menu from "../components/Menu";
import ContactForm from "../components/utils/ContactForm";

const Contact = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section className="pt-40">
        <div className="container xl">
          <ContactForm flexDir={"flex-row"} />
        </div>
      </section>
    </>
  );
};

export default Contact;
