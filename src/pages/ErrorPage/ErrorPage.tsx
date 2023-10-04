import React from 'react';
import styles from "../ErrorPage/ErrorPage.module.scss";
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>Nie znaleziono takiej strony</p>
      <NavLink className={styles.error__button} to="/">Strona główna</NavLink>
    </div>
  )
}

export default ErrorPage;
