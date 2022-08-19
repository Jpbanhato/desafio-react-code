import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./App.css";
import logo from '../assets/mosbius designs.png';

export function App() {
  return (
    <>
      <div className="App">
        <div className="navbar-top">
          <Navbar dark></Navbar>
        </div>
        <section className="main">
          <h1 className="main-title">Main</h1>
          <p className="main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="info">
          <div className="info-div">
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img className="info-img" src={logo}></img>
          </div>
        </section>
        <section className="contact">
          <h4>Entre em contato conosco</h4>
          Nome:<input></input>
          Email:<input></input>
        </section>
        <div className="footer">
          <h3>Footer</h3>
          {/* <Footer></Footer> */}
        </div>
      </div>
    </>
  );
}
