import React from "react";
import bcg11 from "../../assets/bcg11.jpeg";
import Button from "../Button/Button";
import "../Form/Form.scss";

const Form = () => {
  return (
    <div className="formArea">
    <img className="formArea__img" src={bcg11} alt="przykład ciast" />
    <form className="form">
      <h3 className="form__heading">Formularz kontaktowy</h3>

      <label htmlFor="exampleInputEmail1"></label>
      <input
        type="text"
        className="form__control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Imię i nazwisko *"
      />

      <label htmlFor="exampleInputPassword1"></label>
      <input
        type="email"
        className="form__control"
        id="exampleInputPassword1"
        placeholder="Email *"
      />

      <label htmlFor="exampleInputPassword1"></label>
      <input
        type="tel"
        className="form__control"
        id="exampleInputPassword1"
        placeholder="Telefon *"
      />

      <textarea
        className="form__control form__control--message"
        id="exampleInputPassword1"
        placeholder="Twoja wiadomość *"
      />

      <Button buttonName={"Wyślij"} type={"submit"} />
    </form>
    </div>
    
  );
};

export default Form;
