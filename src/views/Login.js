
import React from "react"
import './Login.scss';
import Button from "../components/Button";

function Login() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log in</h3>
          <div className="form-group-login mt-3">
            <label className="label-class">Email</label>
            <input
              type="email"
              className="mt-1"
              placeholder="Email"
            />
          </div>
          <div className="form-group-login mt-3">
            <label className="label-class">Senha</label>
            <input
              type="password"
              className="mt-1"
              placeholder="Senha"
            />
          </div>
            <Button color="rgb(6, 34, 51)" />
        </div>
      </form>
    </div>
  )
}

export default Login;