import React from 'react';
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import styles from "../ErrorPage/ErrorPage.module.scss";
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  useWebsiteTitle("Chodź na ciacho - błąd");
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>Nie znaleziono takiej strony</p>
      <NavLink className={styles.error__button} to="/">Strona główna</NavLink>
    </div>
  )
}

export default ErrorPage;
