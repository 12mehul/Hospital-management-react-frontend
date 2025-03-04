import { createContext, useContext, useEffect, useState } from "react";
import adminFetch from "../axiosbase/interceptors";
import { useToast } from "./ToastProvider";

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const toast = useToast();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserProfile = async () => {
    try {
      if (user) return;
      const response = await adminFetch.get("/accounts/profile");
      setUser(response.data);
    } catch (error) {
      setError(error.response?.data.msg);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ user, setUser, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
