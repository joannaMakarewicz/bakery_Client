import React, { useContext } from "react";
import ExtraContent from "../../components/ExtraContent/ExtraContent";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import "../Contact/Contact.scss";
import MyDataContext from "../../context/MyDataContext";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Arrow from "../../components/Arrow/Arrow";
import bcg52 from "../../assets/bcg52.jpg";
import bcg45 from "../../assets/bcg45.jpg";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";

const Contact = () => {
  useWebsiteTitle('Kontakt');
  const contactData = useContext(MyDataContext);

  const backgroundImages = [
    bcg52,
    bcg45
  ]

  return (
    <>
      <ExtraContent />
      <Navbar />
      <Arrow/>
      <HeaderSmall backgroundImages={backgroundImages}/>
      <main className="contact pt-5 pb-5">
        <section className="contact__section">
          <article className="contact__article">
            <div className="w-25 mx-auto contact__border" />
            <h1 className="contact__heading">Zapraszam do kontaktu</h1>
            <div className="w-25 mx-auto contact__border" />

            <p className="contact__name"> Chodź na Ciacho - Magdalena Kalinowska</p>
            <ul className="contact__list">
              <li className="contact__tel fs-3">
                <a
                  href={`tel: ${contactData.myData.tel}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillTelephoneFill className="me-1" />
                  {contactData.myData.tel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto: ${contactData.myData.tel}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdAlternateEmail className="me-1" />
                  {contactData.myData.email}
                </a>
              </li>
              <li>
                <a
                  href={contactData.myData.google}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLocationDot className="me-1" />
                ul. {contactData.myData.address}
                <span className="contact__list--special">
                  {contactData.myData.city}
                </span>
                </a>
              </li>
            </ul>
          </article>
          <iframe
          className="contact__iframe"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.2422673784986!2d18.6270992!3d54.352699799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73e278063c51%3A0x6b1d9a2057e63c9b!2sChod%C5%BA%20na%20ciacho!5e0!3m2!1spl!2spl!4v1690810739790!5m2!1spl!2spl"
          ></iframe>
        </section>
      </main>
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
