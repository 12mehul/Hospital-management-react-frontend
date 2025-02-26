import {
  emailRegex,
  lengthRegex,
  lowercaseRegex,
  nameRegex,
  noWhitespaceRegex,
  numberRegex,
  phoneRegex,
  pincodeRegex,
  specialCharRegex,
  uppercaseRegex,
} from "../regularExpressions/regex";

// Function to validate password separately
export function validatePassword(value) {
  if (!value) return "Password is required";
  if (!uppercaseRegex.test(value))
    return "Must contain at least one uppercase letter";
  if (!lowercaseRegex.test(value))
    return "Must contain at least one lowercase letter";
  if (!specialCharRegex.test(value))
    return "Must contain at least one special character";
  if (!numberRegex.test(value))
    return "Must contain at least one numeric digit";
  if (!noWhitespaceRegex.test(value)) return "Must not contain whitespace";
  if (!lengthRegex.test(value)) return "Must be 8-15 characters long";
  return "";
}

// Common validation function
export const validateField = (name, value, formValues, step, userType) => {
  const requiredFields = {
    1: {
      firstName: "First name is required",
      lastName: "Last name is required",
      email: "Email is required",
      password: "Password is required",
      confirmPassword: "Confirm password is required",
      specializationId:
        userType === "doctor" ? "Specialization is required" : "",
    },
    2: {
      dob: "Date of birth is required",
      gender: "Gender is required",
      phone: "Phone number is required",
      experience: userType === "doctor" ? "Experience is required" : "",
      licenseNumber: userType === "doctor" ? "License number is required" : "",
    },
    3: {
      addressLine: "Address line is required",
      city: "City is required",
      state: "State is required",
      country: "Country is required",
      pincode: "Pincode is required",
    },
  };

  // **Prevent validation for fields that are not in the current step**
  if (!requiredFields[step]?.hasOwnProperty(name)) {
    return ""; // Skip validation
  }

  // Check if the field is required but empty
  if (requiredFields[step][name] && !value) {
    return requiredFields[step][name];
  }

  // Field-specific validation
  switch (name) {
    case "firstName":
    case "lastName":
      return !nameRegex.test(value)
        ? `${
            name === "firstName" ? "First" : "Last"
          } name should contain only letters`
        : "";

    case "email":
      return !emailRegex.test(value) ? "Invalid email format" : "";

    case "password":
      return validatePassword(value);

    case "confirmPassword":
      return value !== formValues.password ? "Passwords do not match" : "";

    case "phone":
      return step === 2 && !phoneRegex.test(value)
        ? "Phone number should be 10 digits long"
        : "";

    case "licenseNumber":
      return step === 2 && !noWhitespaceRegex.test(value)
        ? "License number must not contain spaces"
        : "";

    case "pincode":
      return step === 3 && !pincodeRegex.test(value)
        ? "Pincode should be exactly six digits"
        : "";

    default:
      return "";
  }
};

// export const validateField = (name, value, formValues, step, userType) => {
//   if (step === 1) {
//     if (["firstName", "lastName"].includes(name)) {
//       if (!value)
//         return `${name === "firstName" ? "First" : "Last"} name is required`;
//       if (!nameRegex.test(value))
//         return `${
//           name === "firstName" ? "First" : "Last"
//         } name should contain only letters`;
//     }
//     if (name === "email") {
//       if (!value) return "Email is required";
//       if (!emailRegex.test(value)) return "Invalid email format";
//     }
//     if (name === "password") {
//       const passwordError = validatePassword(value);
//       if (passwordError) return passwordError;
//     }
//     if (name === "confirmPassword") {
//       if (!value) return "Confirm password is required";
//       if (value !== formValues.password) return "Passwords do not match";
//     }
//     if (userType === "doctor") {
//       if (name === "specializationId" && !value)
//         return "Specialization is required";
//     }
//   }

//   if (step === 2) {
//     if (name === "dob" && !value) return "Date of birth is required";
//     if (name === "gender" && !value) return "Gender is required";
//     if (name === "phone") {
//       if (!value) return "Phone number is required";
//       if (!phoneRegex.test(value))
//         return "Phone number should be 10 digits long";
//     }
//     if (userType === "doctor") {
//       if (name === "experience" && !value) return "Experience is required";
//       if (name === "licenseNumber") {
//         if (!value) return "License number is required";
//         if (!noWhitespaceRegex.test(value))
//           return "License number must not contain spaces";
//       }
//     }
//   }

//   if (step === 3) {
//     if (name === "addressLine" && !value) return "Address line is required";
//     if (name === "city" && !value) return "City is required";
//     if (name === "state" && !value) return "State is required";
//     if (name === "country" && !value) return "Country is required";
//     if (name === "pincode") {
//       if (!value) return "Pincode is required";
//       if (!pincodeRegex.test(value))
//         return "Pincode should be exactly six digits";
//     }
//   }

//   return "";
// };
