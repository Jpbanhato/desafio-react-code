import logo from "../assets/mosbius designs.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <h3 className="py-2">Mosbius Designs</h3>
        <img className="navbar-img" src={logo}></img>
        <h5 className="footer-text py-2">
          © 2022 UFJF <br></br>Todos os direitos reservados
        </h5>
      </div>
    </>
  );
}
