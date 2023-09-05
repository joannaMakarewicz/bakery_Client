import React, { useState } from "react";
import LoadingButton from "../../helpers/LoadingButton/LoadingButton";
import emailjs from "@emailjs/browser";
import bcg2 from "../../assets/bcg2.jpeg";
import "../FormQuotation/FormQuotation.scss";

const FormQuotation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  const makeQuotation = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_8sjpl4f",
        "template_ihzlhtl",
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
    <div className="formQuotationArea">
      <form className="formQuotation" onSubmit={makeQuotation}>
        <div className="w-25 mx-auto contact__border" />
        <h3 className="formQuotation__heading">Wyceń swój wymarzony tort</h3>
        <div className="w-25 mx-auto contact__border mb-5" />

        {status ? (
          <p className="alert mb-5">Twoja wiadomość została wysłana</p>
        ) : null}

        <label htmlFor="name"></label>
        <input
          type="text"
          className="formQuotation__control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Imię i nazwisko *"
          required
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          className="formQuotation__control"
          id="email"
          name="email"
          placeholder="Email *"
          required
        />

        <label htmlFor="phone"></label>
        <input
          type="tel"
          className="formQuotation__control"
          id="phone"
          name="phone"
          placeholder="Telefon *"
          required
        />
        <label htmlFor="guests"></label>
        <input
          type="number"
          min="0"
          className="formQuotation__control"
          id="guests"
          name="guests"
          placeholder="Liczba gości *"
          required
        />

        <label htmlFor="type"></label>
        <input
          type="text"
          className="formQuotation__control"
          id="type"
          name="type"
          placeholder="Rodzaj przyjęcia*"
          required
        />

        <textarea
          className="formQuotation__control formQuotation__control--message"
          id="message"
          name="message"
          placeholder="Motyw, kolor lub ozdoby *"
          maxLength={200}
          required
        />
        <p className="formQuotation__info">* pole wymagane</p>
        <LoadingButton loading={loading}>Wyślij</LoadingButton>
      </form>
      <div className="formQuotationArea__frame">
        <img
          className="formQuotationArea__img"
          src={bcg2}
          alt="przykład ciast"
        />
      </div>
    </div>
  );
};

export default FormQuotation;
