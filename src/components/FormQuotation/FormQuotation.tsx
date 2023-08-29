import React from 'react';
import LoadingButton from '../../helpers/LoadingButton/LoadingButton';
import emailjs from "@emailjs/browser";
import bcg2 from "../../assets/bcg2.jpeg";
import "../FormQuotation/FormQuotation.scss";

const FormQuotation = () => {

    const makeQuotation = (e: any) => {
        e.preventDefault();
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
        e.target.reset();
      };
  return (
    <div className="formQuotationArea">
              <div className="formArea__frame">
        <img className="formArea__img" src={bcg2} alt="przykład ciast" />
      </div>
      <form className="formQuotation" onSubmit={makeQuotation}>
        <h3 className="formQuotation__heading">Wyceń swój wymarzony tort</h3>

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

<label htmlFor="reason"></label>
        <input
          type="text"
          className="formQuotation__control"
          id="reason"
          name="reason"
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
        <LoadingButton value={"Wyślij"} type={"submit"} />
      </form>
    </div>
  );
}

export default FormQuotation;
