import React from 'react';
import "../ErrorPage/ErrorPage.scss";
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <p>Nie znaleziono takiej strony</p>
      <NavLink className="error__button" to="/">Strona główna</NavLink>
    </div>
  )
}

export default ErrorPage;
