import React from "react";
import ContactForm from "../components/utils/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="pt-40">
        <div className="container xl">
          <ContactForm flexDir={"flex-row"} />
        </div>
      </section>
    </>
  );
};

export default Contact;
