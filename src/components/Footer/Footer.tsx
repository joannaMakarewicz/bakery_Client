import React, { useContext} from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { LiaCopyrightSolid } from "react-icons/lia"
import MyDataContext from "../../context/MyDataContext";
import "../Footer/Footer.scss";

type FooterProps = {
  showRegulations?:()=>void;
  showPolicy?:()=> void
}

const Footer = ({showPolicy, showRegulations}:FooterProps) => {
  const dataBase = useContext(MyDataContext);


  return (
    <MyDataContext.Consumer>
      {(dataBase) => (
        <footer className="footer">
          <section className="footer__article">
            <Link to="/" className="footer__container col-md-3 col-sm-6 w-100">
              <img className="footer__logo" src={logo} alt="chodź na ciacho" />
            </Link>
            <div className="col-md-3 col-sm-6 w-100">
              <h5 className=" footer__heading">
                {dataBase.myData.name}
              </h5>
              <p className="footer__owner">{dataBase.myData.owner}</p>
              <ul className="footer__list">
                <li>
                  <a href={dataBase.myData.google} target="_blank" rel="noreferrer">
                    <FaLocationDot className="me-1" />
                  </a>
                  ul. {dataBase.myData.address}
                  <span className="footer__list--special">{dataBase.myData.city}</span>
                </li>
                <li className="text-nowrap">
                  <a href={`mailto: ${dataBase.myData.tel}`} target="_blank" rel="noreferrer">
                    <MdAlternateEmail className="me-1" />
                    {dataBase.myData.email}
                  </a>
                </li>
                <li>
                  <a href={`tel: ${dataBase.myData.tel}`} target="_blank" rel="noreferrer" >
                    <BsFillTelephoneFill className="me-1" />
                    {dataBase.myData.tel}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__contact col-md-3 col-sm-6 w-100">
              <h5>Nawigacja</h5>
              <p className="footer__special footer__special--margin"><button className="footer__button" onClick={showPolicy}>
                Polityka prywatności
              </button></p>
              
              <p className="footer__special"><button className="footer__button" onClick={showRegulations}>Regulamin</button></p>
            </div>
            <div className="col-md-3 col-sm-6 w-100 ">
              <h5 >Obserwuj</h5>
              <div className="fs-2 mt-4">
                <a href={dataBase.myData.fb} target="_blank" rel="noreferrer">
                  <BsFacebook className="me-3" />
                </a>
                <a
                  href={dataBase.myData.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram className="me-3" />
                </a>
              </div>
            </div>
          </section>
          <div className="footer__author"><LiaCopyrightSolid/> 2023 Joanna Makarewicz</div>
        </footer>
      )}
    </MyDataContext.Consumer>
  );
};

export default Footer;
