import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, Lock, Mail, ChevronRight, Activity, ShieldCheck, Stethoscope, HeartPulse } from "lucide-react";
import "../styles/Login.css"

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const baseURL = "http://localhost:5000/api/auth";

      if (isRegister) {
        if (role === "doctor") {
          alert("Doctor registration is only allowed by Admin.");
          setLoading(false);
          return;
        }

        const endpoint = role === "admin" ? "/register-admin" : "/register-patient";
        await axios.post(`${baseURL}${endpoint}`, form);

        alert("Registered successfully. Please login.");
        setIsRegister(false);
        setForm({ name: "", email: "", password: "" });
        setLoading(false);
        return;
      }

      const res = await axios.post(`${baseURL}/login`, {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") navigate("/admin/dashboard");
      else if (res.data.role === "doctor") navigate("/doctor/dashboard");
      else navigate("/patient/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
      setLoading(false);
    }
  };

  const getRoleIcon = (r) => {
    if (r === "admin") return <ShieldCheck size={20} />;
    if (r === "doctor") return <Stethoscope size={20} />;
    if (r === "patient") return <HeartPulse size={20} />;
    return <User size={20} />;
  };
 return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-left">
          <div className="brand">
            <div className="brand-icon"><Activity size={24} /></div>
            <h1>BALU HOSPITAL</h1>
          </div>

          <h2>Advanced Care,<br />Trusted by All.</h2>
          <p>
            Experience the future of healthcare management with our secure, efficient, and user-friendly platform.
          </p>

          <span className="copyright">
            © 2026  Balu Hospital Management System
          </span>
        </div>
        <div className="login-right">
          <h2>{isRegister ? "Create Account" : "Welcome Back"}</h2>
          <p className="subtitle">
            {isRegister ? "Join us to manage your healthcare journey." : "Please enter your details to sign in."}
          </p>

          <div className="role-selector">
            {["admin", "doctor", "patient"].map((r) => (
              <button
                key={r}
                onClick={() => {
                  setRole(r);
                  if (r === "doctor") setIsRegister(false);
                }}
                className={role === r ? "role-btn active" : "role-btn"}
              >
                {getRoleIcon(r)} <span>{r}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="login-form">

            {isRegister && (
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-box">
                  <User size={18} />
                  <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </div>
              </div>
            )}

            <div className="input-group">
              <label>Email</label>
              <div className="input-box">
                <Mail size={18} />
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-box">
                <Lock size={18} />
                <input type="password" name="password" value={form.password} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Processing..." : (isRegister ? "Create Account" : "Sign In")}
              {!loading && <ChevronRight size={18} />}
            </button>
          </form>

          {role !== "doctor" && (
            <p className="toggle-text">
              {isRegister ? "Already have an account?" : "Don't have an account?"}
              <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? " Sign In" : " Register Now"}
              </button>
            </p>
          )}

          {role === "doctor" && (
            <p className="note">
              Doctor accounts must be created by the Hospital Administrator.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
