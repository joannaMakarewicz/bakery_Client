import React from "react";
import Button from "../Button/Button";
import "../Form/Form.scss";

const Form = () => {
  return (
    <div className="form">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <Button buttonName={"Wyślij"} type={"submit"} />
      </form>
    </div>
  );
};

export default Form;
