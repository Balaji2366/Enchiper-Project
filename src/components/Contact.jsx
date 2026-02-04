import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Contact.css";

import contactHero from "../assets/contact-hero.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-page">
      <Header />

      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p className="breadcrumb">
            Home / <span>Contact</span>
          </p>
          <h1>Contact Us</h1>
        </div>

        <div className="hero-bottom-line"></div>
      </section>
      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=tirupur&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </section>
      <section className="contact-content">
        <div className="contact-wrapper">
          <div className="contact-form">
            <span>GET IN TOUCH</span>
            <h2>Contact</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="full"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="full"
              ></textarea>

              <button type="submit" className="full">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="contact-info">
            {[
              { title: "EMERGENCY", value: "99524-04890\n96981-25979" },
              { title: "LOCATION", value: "TIRUPUR\nINDIA", dark: true },
              { title: "EMAIL", value: "anbuhospital@gmail.com" },
              { title: "WORKING HOURS", value: "Mon–Sun\n09:00–20:00\nEveryday" },
            ].map((item, i) => (
              <div
                key={i}
                className={`info-card ${item.dark ? "active" : ""}`}
              >
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
