import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../components/Contact.scss";
import Button from "./Button";

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
              <a href="instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <span>mosbiusdesigns</span>
            </div>
            <div className="icon-text">
              <a href="facebook.com">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <span>@mosbiusdesigns</span>
            </div>
          </div>
        </div>
        <form className="form-contact">
          <div className="col personal-info">
            <div className="form-group-contact">
              <label>Nome</label>
              <input type="text" />
            </div>
            <div className="form-group-contact">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>
          <div className="col">
            <div className="form-group-contact solo">
              <label>Mensagem</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="col">
            <div className="form-group-contact right">
              <Button />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
