import React, { createContext, useState, useContext } from "react";
import ToastSuccess from "../toastContainer/ToastSuccess";
import ToastDanger from "../toastContainer/ToastDanger";

// Initialize Context with a default object to ensure autocompletion
const ToastContext = createContext({
  show: () => {},
  success: () => {},
  error: () => {},
});

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  const showToast = (message, type) => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast({ message: "", type: "", visible: false }), 3000);
  };

  const toastActions = {
    show: showToast,
    success: (message) => showToast(message, "success"),
    error: (message) => showToast(message, "error"),
  };

  return (
    <ToastContext.Provider value={toastActions}>
      {children}
      {toast.visible && toast.type === "success" && (
        <ToastSuccess
          message={toast.message}
          onClose={() => setToast({ ...toast, visible: false })}
        />
      )}
      {toast.visible && toast.type === "error" && (
        <ToastDanger
          message={toast.message}
          onClose={() => setToast({ ...toast, visible: false })}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
