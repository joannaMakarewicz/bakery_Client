import React from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Header from "../../components/Main/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import bcg10 from "../../assets/bcg10.jpeg";
import "../Contact/Contact.scss";

const Contact = () => {
  return (
    <>
      <ExtraContent />
      <Navbar />
      <main className="contact pt-5 pb-5">
      <section className="contact__section">
        <div className="contact__content">
          <img src={bcg10} alt="cakes" width={"100%"} />
        </div>

        
          <div className="w-25 mx-auto my-3 contact__border" />
          <h1 className="contact__heading">
            Tortowe wariacje i cukrowe inspiracje
          </h1>
          <div className="w-25 mx-auto my-3 contact__border" />
          <Form />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
