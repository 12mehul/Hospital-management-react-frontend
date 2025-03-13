import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // Define public routes where logged-in users shouldn't be allowed
  const publicRoutes = ["/", "/login", "/patientRegister", "/doctorRegister"];

  // If user has a token and tries to access a public route, redirect to /appointment
  if (token && publicRoutes.includes(location.pathname)) {
    return <Navigate to="/appointment" replace />;
  }

  // If user doesn't have a token and tries to access protected routes, redirect to /login
  if (!token && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
