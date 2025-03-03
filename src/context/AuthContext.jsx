import { createContext, useContext, useEffect, useState } from "react";
import adminFetch from "../axiosbase/interceptors";

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserProfile = async () => {
    try {
      if (user) return;
      const response = await adminFetch.get("/accounts/profile");
      setUser(response.data);
    } catch (error) {
      console.log(error.response?.data.msg);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
