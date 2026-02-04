import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {  
    const navigate = useNavigate();
    return (
    <>
    <div className="t">
        <div className="t-logo">
            <img src="./logo.png" alt="Balu logo" />
            <div>
            <h2>BALU</h2>
            <p>HOSPITAL</p>
          </div>
        </div>
            
        <div className="t-info">
            <div>
                <h4>EMERGENCY</h4>
                <span>
                    +91 63815 31037
                </span>
                </div>
                <div className="divide"></div>
                <div>
                <h4>WORKING HOURS</h4>
                <span>
                    8:00 - 20:00 Everyday
                </span>
                </div>
                <div className="divide"></div>
                <div>
                    <h4>LOCATION</h4>
                    <span>TIRUPPUR</span>
                </div>
            </div>
    </div>
    <nav className="navbar">
        <div className="nav-logo">
            <img src="/logo.png" alt="Balu Logo" />
            <span>BALU HOSPITAL</span>
        </div>
         <ul className="Nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

        <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
    </nav>
    </>
  );
}

export default Header;