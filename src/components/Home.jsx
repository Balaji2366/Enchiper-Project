import "../styles/Home.css";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";


function Home() {
  return (
    <div className="home">
      <Header />
      <section className="hero-section">
        <div className="hero-text">
          <span className="hero-tag">CARING FOR LIFE</span>
          <h1>
            Leading the Way in <br />
            Medical Excellence
          </h1>
        </div>

        <div className="hero-image">
          <img src="/hero-doctor.jpg" alt="Medical Team" />
        </div>
      </section>

      {/* WELCOME ADDRESS */}
      <section className="welcome-section">
        <span className="welcome-tag">WELCOME TO BALU HOSPITAL</span>
        <h2>A Great Place to Receive Care</h2>
        <p>
          At Balu Hospital, we are dedicated to providing compassionate,
          high-quality healthcare in a safe and welcoming environment.
          Our experienced medical professionals combine advanced medical
          technology with personalized care to ensure every patient
          receives the attention they deserve.
          <br /><br />
          We believe in treating not just illnesses, but people — with
          dignity, empathy, and respect. From preventive health checkups
          to specialized medical treatments, our hospital is committed
          to improving lives and promoting long-term well-being for our
          community.
        </p>
      </section>
      <section className="our-services">
        <div className="services-container">
          <div className="service-list">
            <div className="service-item">Free Checkup</div>
            <div className="service-item">Cardiogram</div>
            <div className="service-item">DNA Testing</div>
            <div className="service-item">Blood Bank</div>
            <button className="view-all-btn">View All</button>
          </div>

          <div className="service-content">
            <h3>A passion for putting patients first.</h3>

            <div className="points">
              <ul>
                <li>A Passion for Healing</li>
                <li>All our best</li>
                <li>Always Caring</li>
              </ul>

              <ul>
                <li>5-Star Care</li>
                <li>Believe in Us</li>
                <li>A Legacy of Excellence</li>
              </ul>
            </div>

            <p>
              At Balu Hospital, our mission is rooted in a deep commitment
              to patient-centered care. We approach every treatment with
              compassion, integrity, and a genuine passion for healing.
              Our team strives to deliver excellence by combining medical
              expertise with personal attention.
            </p>
          </div>
          <div className="service-images">
            <img src="/service1.jpg" alt="Doctor with patient" />
            <img src="/service2.jpg" alt="Senior care" />
          </div>

        </div>
      </section>
      <section className="specialities-section">
        <span className="special-tag">ALWAYS CARING</span>
        <h2>Our Specialities</h2>

        <div className="specialities-grid">
          <div className="special-card">
            <span className="icon">♡</span>
            <p>Neurology</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Bones</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Oncology</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Otorhinolaryngology</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Ophthalmology</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Cardiovascular</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Pulmonology</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Renal Medicine</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Gastroenterology</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Urology</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Dermatology</p>
          </div>

          <div className="special-card">
            <span className="icon">♡</span>
            <p>Gynaecology</p>
          </div>
        </div>
      </section>
      <section className="appointment-section">
        <div className="appointment-wrapper">

          <div className="appointment-text">
            <h2>Book an Appointment</h2>
            <p>
              For more information, book an appointment with our
              reputed and experienced doctors.
            </p>
          </div>

          <div className="appointment-form">
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <select>
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="form-row">
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
              </div>

              <div className="form-row">
                <input type="date" />
                <input type="time" />
              </div>

              <div className="form-row">
                <select>
                  <option>Doctor</option>
                  <option>Dr. Arun</option>
                  <option>Dr. Meena</option>
                </select>

                <select>
                  <option>Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                </select>
              </div>

              <textarea placeholder="Message"></textarea>

              <button type="submit">SUBMIT</button>
            </form>
          </div>

        </div>
      </section>
      <section className="doctors-section">
        <span className="doctor-tag">TRUSTED CARE</span>
        <h2>Our Doctors</h2>

        <div className="doctors-grid">
          <div className="doctor-card">
            <img src="/doctor1.jpg" alt="Dr. Kumaravel" />
            <div className="doctor-info">
              <h4>Dr. Kumaravel</h4>
              <p>Neurology</p>
            </div>
          </div>

          <div className="doctor-card">
            <img src="/doctor2.jpg" alt="Dr. Anitha Raj" />
            <div className="doctor-info">
              <h4>Dr. Anitha Raj</h4>
              <p>Cardiology</p>
            </div>
          </div>

          <div className="doctor-card">
            <img src="/doctor3.jpg" alt="Dr. Samuel John" />
            <div className="doctor-info">
              <h4>Dr. Samuel John</h4>
              <p>Orthopedics</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}

export default Home;
