import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Doctors.css";

import heroBg from "../assets/doctors-illustration.jpg";
import doc1 from "../assets/doctor1.jpg";
import doc2 from "../assets/doctor2.jpg";
import doc3 from "../assets/doctor3.jpg";

const doctors = [
  { name: "Dr. Kumaravel", dept: "Neurology", image: doc1 },
  { name: "Dr. Anitha Raj", dept: "Cardiology", image: doc2 },
  { name: "Dr. Samuel John", dept: "Orthopedics", image: doc3 },
  { name: "Dr. Samuel John", dept: "Orthopedics", image: doc3 },
  { name: "Dr. Samuel John", dept: "Orthopedics", image: doc3 },
  { name: "Dr. Samuel John", dept: "Orthopedics", image: doc3 },
  { name: "Dr. Samuel John", dept: "Orthopedics", image: doc3 },
  { name: "Dr. Samuel John", dept: "Orthopedics", image: doc3 },
  { name: "Dr. Samuel John", dept: "Orthopedics", image: doc3 },
];

export default function Doctors() {
  return (
    <div className="doctors-page">
      <Header />
      <section
        className="doctors-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="doctors-hero-content">
          <p className="breadcrumb">Home / Doctors</p>
          <h1>Doctors</h1>
        </div>
        <div className="hero-line"></div>
      </section>
      <section className="doctors-section">
        <div className="doctors-grid">
          {doctors.map((doc, i) => (
            <div key={i} className="doctor-card">
              <img src={doc.image} alt={doc.name} />
              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <p>{doc.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
