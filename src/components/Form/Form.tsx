import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bcg54 from "../../assets/bcg54.jpg";
import "../Form/Form.scss";
import LoadingButton from "../../helpers/LoadingButton/LoadingButton";

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);
  console.log(loading, status);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_8sjpl4f",
        "template_96glbjq",
        e.target,
        "gxhVuR-MaQt-BRs6F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
   


    setTimeout(() => {
      setStatus(true);
      e.target.reset();
      setLoading(false);
    }, 200);
  };

  return (
    <div className="formArea">
      <div className="formArea__frame">
        <img className="formArea__img" src={bcg54} alt="przykład ciast" />
      </div>
      <form className="form" onSubmit={sendEmail}>
        <h3 className="form__heading">Formularz kontaktowy</h3>

        {status ? (
          <p className="alert">Twoja wiadomość została wysłana</p>
        ) : null}

        <label htmlFor="name"></label>
        <input
          type="text"
          className="form__control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Imię i nazwisko *"
          required
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          className="form__control"
          id="email"
          name="email"
          placeholder="Email *"
          required
        />

        <label htmlFor="phone"></label>
        <input
          type="tel"
          className="form__control"
          id="phone"
          name="phone"
          placeholder="Telefon *"
          required
        />

        <textarea
          className="form__control form__control--message"
          id="message"
          name="message"
          placeholder="Twoja wiadomość *"
          maxLength={200}
          required
        />
        <p className="form__info">* pole wymagane</p>
        <LoadingButton loading={loading}>Wyślij</LoadingButton>
      </form>
    </div>
  );
};

export default Form;
