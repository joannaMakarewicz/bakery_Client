import React, { useState } from "react";
import LoadingButton from "../../helpers/LoadingButton/LoadingButton";
import emailjs from "@emailjs/browser";
import formQuotationImg from "../../assets/formQuotationImg.jpeg";
import "../FormQuotation/FormQuotation.scss";
import FormItem from "../FormItem/FormItem";

const FormQuotation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  const formQuotationContent = [
    {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Imię i nazwisko *",
      htmlFor: "name",
      className: "formQuotation__control",
      textarea: false,
    },
    {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "E-mail *",
      htmlFor: "email",
      className: "formQuotation__control",
      textarea: false,
    },
    {
      type: "tel",
      id: "phone",
      name: "phone",
      placeholder: "Telefon *",
      htmlFor: "phone",
      className: "formQuotation__control",
      textarea: false,
    },
    {
      type: "number",
      id: "guests",
      name: "guests",
      placeholder: "Liczba gości *",
      htmlFor: "guests",
      className: "formQuotation__control",
      textarea: false,
      min: 0,
    },
    {
      type: "text",
      id: "type",
      name: "type",
      placeholder: "Rodzaj przyjęcia *",
      htmlFor: "type",
      className: "formQuotation__control",
      textarea: false,
    },
    {
      id: "message",
      name: "message",
      placeholder: "Motyw, kolor lub ozdoby *",
      htmlFor: "message",
      className: "formQuotation__control formQuotation__control--message",
      textarea: true,
      maxLength: 200,
    },
  ];

  const makeQuotation = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_udhrx3a",
        "template_0o3clh7",
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
    <div className="formQuotationArea">
      <form className="formQuotation" onSubmit={makeQuotation}>
        <div className="w-25 mx-auto contact__border" />
        <h3 className="formQuotation__heading">Wyceń swój wymarzony tort</h3>
        <div className="w-25 mx-auto contact__border mb-5" />

        {status ? (
          <p className="alert mb-5">Twoja wiadomość została wysłana</p>
        ) : null}

        {formQuotationContent.map((item) => {
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
              min={item.min}
            />
          );
        })}

        <p className="formQuotation__info">* pole wymagane</p>
        <LoadingButton loading={loading}>Wyślij</LoadingButton>
      </form>

      <div className="formQuotationArea__frame">
        <img
          className="formQuotationArea__img"
          src={formQuotationImg}
          alt="przykład ciast"
        />
      </div>

    </div>
  );
};

export default FormQuotation;
