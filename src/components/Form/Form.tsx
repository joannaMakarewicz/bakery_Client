import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import formAreaImg from "../../assets/formAreaImg.jpeg";
import LoadingButton from "../../helpers/LoadingButton/LoadingButton";
import FormItem from "../FormItem/FormItem";
import "../Form/Form.scss";

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  const formContent = [
    {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Imię i nazwisko *",
      htmlFor: "name",
      className:"form__control",
      textarea:false
    },
    {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Email *",
      htmlFor: "email",
      className:"form__control",
      textarea:false
    },
    {
      type: "tel",
      id: "phone",
      name: "phone",
      placeholder: "Telefon *",
      htmlFor: "phone",
      className:"form__control",
      textarea:false
    },
    {
      type: "tel",
      id: "message",
      name: "message",
      placeholder: "Twoja wiadomość *",
      htmlFor: "phone",
      className:"form__control form__control--message",
      textarea:true,
      maxLength:200
    },
  ];

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_udhrx3a",
        "template_x9xfxl9",
        e.target,
        "olrnHNauoTvRvkNFu"
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
        <img className="formArea__img" src={formAreaImg} alt="przykład ciast" />
      </div>
      <form className="form" onSubmit={sendEmail}>
        <h3 className="form__heading">Formularz kontaktowy</h3>

        {status ? (
          <p className="alert">Twoja wiadomość została wysłana</p>
        ) : null}
        {formContent.map((item) => {
          return (
            <FormItem
              type={item.type}
              id={item.id}
              name={item.name}
              placeholder={item.placeholder}
              htmlFor={item.htmlFor}
              key={item.name}
              className={item.className}
              maxLength={item.maxLength}
              textarea={item.textarea}
            />
          );
        })}

        <p className="form__info">* pole wymagane</p>
        <LoadingButton loading={loading}>Wyślij</LoadingButton>
      </form>
    </div>
  );
};

export default Form;
