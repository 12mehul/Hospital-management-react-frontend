import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PatientRegister from "./pages/PatientRegister";
import DoctorRegister from "./pages/DoctorRegister";
import Profile from "./pages/Profile";
import Layout from "./common/Layout";
import BookAppointment from "./pages/BookAppointment";
import AppointmentLists from "./pages/AppointmentLists";
import PatientLists from "./pages/PatientLists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="appointment" element={<BookAppointment />} />
          <Route path="appointment/lists" element={<AppointmentLists />} />
          <Route path="patients" element={<PatientLists />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/patientRegister" element={<PatientRegister />} />
        <Route path="/doctorRegister" element={<DoctorRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
