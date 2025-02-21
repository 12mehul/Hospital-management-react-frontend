import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PatientRegister from "./PatientRegister";
import DoctorRegister from "./DoctorRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patientRegister" element={<PatientRegister />} />
        <Route path="/doctorRegister" element={<DoctorRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
