import { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import TopBar from "../components/admin/TopBar";
import Overview from "../components/admin/Overview";
import DoctorsManager from "../components/admin/DoctorsManager";
import StaffManager from "../components/admin/StaffManager";
import PatientsList from "../components/admin/PatientsList";
import AppointmentsList from "../components/admin/AppointmentsList";
import MessagesList from "../components/admin/MessagesList";
import "./Admin.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "doctors":
        return <DoctorsManager />;
      case "staff":
        return <StaffManager />;
      case "patients":
        return <PatientsList />;
      case "appointments":
        return <AppointmentsList />;
      case "messages":
        return <MessagesList />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="admin-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="admin-main">
        <TopBar />

        <main className="admin-content">
          <div className="admin-inner">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
