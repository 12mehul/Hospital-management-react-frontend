import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

let toastShown = false; // Global flag to prevent duplicate toasts

// Function to show success toast
export function showSuccessToast(message) {
  if (!toastShown) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();

    toastShown = true;
    setTimeout(() => (toastShown = false), 3000); // Reset after 3s
  }
}

// Function to show error toast
export function showErrorToast(message) {
  if (!toastShown) {
    Toastify({
      text: message || "Internal Server Down",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #ff5f6d, #ffc371)",
      },
    }).showToast();

    toastShown = true;
    setTimeout(() => (toastShown = false), 3000); // Reset after 3s
  }
}
