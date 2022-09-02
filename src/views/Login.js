import React, { useEffect } from "react";
import "./Login.scss";
import Button from "../components/Button";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="Auth-form-container">
      <form action="/admin" className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log in</h3>
          <div className="form-group-login mt-3">
            <label className="label-class">Email</label>
            <input
              type="email"
              className="input-login mt-1"
              placeholder="exemplo@gmail.com"
            />
          </div>
          <div className="form-group-login mt-3">
            <label className="label-class">Senha</label>
            <input type="password" className="input-login mt-1" placeholder="Senha" />
          </div>
          <Button name="Logar" color="rgb(6, 34, 51)" />
        </div>
      </form>
    </div>
  );
}

export default Login;
