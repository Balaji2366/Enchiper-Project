import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

import aboutHero from "../assets/about-hero.jpg";
import aboutImg from "../assets/about-img.jpg";
import founder from "../assets/founder.jpg";
export default function About() {
  return (
    <div className="about-page">
      <Header />
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p className="breadcrumb">
            Home / <span>About</span>
          </p>
          <h1>About us</h1>
        </div>

        <div className="hero-bottom-line"></div>
      </section>
      <section className="about-content">
        <div className="about-wrapper">
          <div className="about-image">
            <img src={aboutImg} alt="Doctors" />
          </div>

          <div className="about-text">
            <span className="section-tag">WELCOME TO BALU HOSPITALS</span>

            <h2>
              Best Care for Your <br /> Good Health
            </h2>

            <div className="about-points">
              {[
                "A Passion for Healing",
                "5-Star Care",
                "All our best",
                "Believe in Us",
                "Always Caring",
                "A Legacy of Excellence",
              ].map((item, i) => (
                <div key={i} className="point">
                  <span className="dot"></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <p className="about-desc">
              At Balu Hospital, our mission is rooted in a deep commitment to
              patient-centered care. We approach every treatment with
              compassion, integrity, and a genuine passion for healing. Our
              team strives to deliver 5-star medical services by combining
              clinical excellence with personal attention, ensuring that every
              patient feels supported and valued.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="testimonial-box">
          <div className="founder-img">
            <img src={founder} alt="Founder" />
          </div>

          <p className="quote">
            “Mr. Balaji K is the visionary Founder and CEO of Balu Hospitals,
            committed to delivering compassionate and world-class healthcare.”
          </p>

          <h4>Mr. Balaji K</h4>
          <p className="role">Founder & Chief Executive Officer</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-header">
          <span>GET IN TOUCH</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-grid">
          {[
            { title: "EMERGENCY", value: "99524-04890\n96981-25979" },
            { title: "LOCATION", value: "TIRUPUR\nINDIA" },
            { title: "EMAIL", value: "baluhospital@gmail.com" },
            { title: "WORKING HOURS", value: "Mon-Sun\n08:00-20:00" },
          ].map((item, i) => (
            <div
              key={i}
              className={`contact-card ${i === 1 ? "active" : ""}`}
            >
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
