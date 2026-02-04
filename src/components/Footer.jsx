import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <div className="foot-col brand">
          <h3>BALU HOSPITAL</h3>
          <p>
            Leading the Way in Medical Excellence, <br />
            Trusted Care.
          </p>
        </div>


        <div className="footc">
          <h4>Important Links</h4>
          <ul className="ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footc">
          <h4>Contact Us</h4>
          <p> 6381531037</p>
          <p> balajikumaravel05c@gmail.com</p>
          <p> Pudhur Pirivu, Tirupur</p>
        </div>
        <div className="foot-col">
          <h4>Newsletter</h4>
          <div className="news">
            <input type="email" placeholder="Enter your email address" />
            <button>Send</button>
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <p>© 2026 BALU HOSPITALS All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
