import React, { useContext } from "react";
import logo from "../../assets/logo.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import "../Footer/Footer.scss";
import MyDataContext from "../../context/MyDataContext";

const Footer = () => {
  const dataBase = useContext(MyDataContext);

  return (
    <MyDataContext.Consumer>
      {(dataBase) => (
        <footer className="footer text-light">
          <section className="container">
            <article className="footer__article">
              <div className="footer__container col-md-3 col-sm-6 mt-3 mb-3 w-100">
                <img
                  className="footer__logo"
                  src={logo}
                  alt="chodź na ciacho"
                />
              </div>
              <div className="footer__contact col-md-3 col-sm-6 mb-3 mt-3 w-100">
                <h5 className=" footer__heading m-0">{dataBase.myData.name.toUpperCase()}</h5>
                <p className="mb-3 fs-5">{dataBase.myData.owner}</p>
                <ul className="footer__list p-0">
                  <li>
                  <a href="x" target="location">
                    <FaLocationDot className="me-1" />
                  </a>
                    ul. {dataBase.myData.address}</li>
                  <li className="text-nowrap"><a href="/"><MdAlternateEmail className="me-1"/>{dataBase.myData.email}</a></li>
                  <li>
                    <a
                      href={`tel: ${dataBase.myData.tel}`}
                      className="extraContent__tel"
                    >
                      <BsFillTelephoneFill className="me-1" />
                      508 046 549
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 mb-3 mt-3 w-100">
                <h5 className="mb-3">NAWIGACJA</h5>
                <p className="m-0">Polityka prywatności</p>
                <p>Regulamin</p>
              </div>
              <div className="col-md-3 col-sm-6 mb-3 mt-3 w-100">
                <h5 className="mb-3">OBSERWUJ NAS</h5>
                <div className="footer__container fs-2">
                  <a href="x" target="facebook">
                    <BsFacebook className="me-3" />
                  </a>
                  <a href="x" target="instagram">
                    <BsInstagram className="me-3" />
                  </a>
                </div>
              </div>
            </article>
          </section>
        </footer>
      )}
    </MyDataContext.Consumer>
  );
};

export default Footer;
