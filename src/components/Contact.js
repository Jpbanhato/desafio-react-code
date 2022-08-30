import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../components/Contact.scss";

function Contact() {
  return (
    <>
      <h1 className="first-title">Entre em contato conosco</h1>
      <p className="subtitle">Identifique-se e converse com a gente!</p>

      <div id="contact-container">
        <div className="contact-info">
          <h4 className="contact-title">Informações de Contato</h4>
          <p>Preencha e envie</p>
          <div className="row links-container">
            <div className="icon-text">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <span>mosbiusdesigns</span>
            </div>
            <div className="icon-text">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <span>@mosbiusdesigns</span>
            </div>
          </div>
        </div>
        <form>
          <div className="col personal-info">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>
          <div className="col">
            <div className="form-group solo">
              <label>Mensagem</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="col">
            <div className="form-group right">
              <button className="primary">Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
