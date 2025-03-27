import React, { useState } from "react";
import { useToast } from "../../context/ToastProvider";
import Loader from "../../common/Loader";
import adminFetch from "../../axiosbase/interceptors";
import { useFetch } from "../../customHooks/useFetch";
// image
import { CloseIcon, LeftArrowBoxIcon } from "../../assets/SVGIcons";
import doctorProfile from "../../assets/img/doctorProfile.jpg";
import patientProfile from "../../assets/img/patientProfile.jpg";
import backIcon from "../../assets/icon/back-icon.jpg";

const EditProfile = ({ user, setUser, handleClick }) => {
  const toast = useToast();
  const [loader, setLoader] = useState(false);
  const role = localStorage.getItem("role");
  const { data: specialities } =
    role === "doctor" ? useFetch("/speciality") : { data: null };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      fullAddress: { ...prev.fullAddress, [name]: value },
    }));
  };

  const handleSpecialtySelect = (e) => {
    const selectedId = e.target.value;
    if (
      selectedId &&
      !user.specializationId.some((s) => s._id === selectedId)
    ) {
      const selectedSpecialty = specialities?.specialities.find(
        (s) => s._id === selectedId
      );
      if (selectedSpecialty) {
        setUser((prev) => ({
          ...prev,
          specializationId: [...prev.specializationId, selectedSpecialty],
        }));
      }
    }
  };

  const removeSpecialty = (id) => {
    setUser((prev) => ({
      ...prev,
      specializationId: prev.specializationId.filter((s) => s._id !== id),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const res = await adminFetch.put("/accounts/update", user);
      if (res.data) {
        setLoader(false);
        toast.success(res.data.msg);
        setTimeout(() => handleClick("details"), 1000);
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.response?.data.msg || error.message);
    }
  };

  return (
    <div className="max-w-4xl w-full h-auto p-10 bg-white rounded-2xl font-normal leading-relaxed shadow-md shadow-gray-300 transition transform duration-500 hover:scale-105 hover:shadow-blue-400 hover:transition">
      <div className="flex items-start justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleClick("details")}
        >
          <img
            src={backIcon}
            alt="Back"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-lg font-medium text-blue-800 hover:text-rose-600">
            Back
          </span>
        </div>
        <h2 className="w-3/5 text-xl font-semibold text-blue-800">
          Welcome,{" "}
          {role === "patient"
            ? "Patient"
            : role === "doctor"
            ? "Doctor"
            : "User"}
          . Edit your profile here
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        {user && (
          <div className="mt-3 flex flex-col md:flex-row">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img
                src={role === "doctor" ? doctorProfile : patientProfile}
                alt="Profile Picture"
                className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-sky-600 transition-transform duration-300 hover:scale-105 ring ring-gray-300"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  className="input-profile"
                  placeholder="Enter first name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="input-profile"
                  placeholder="Enter last name"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </div>
              {role === "doctor" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <input
                      type="number"
                      className="input-profile"
                      placeholder="Enter experience"
                      name="experience"
                      value={user.experience}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="input-profile"
                      placeholder="Enter license number"
                      name="licenseNumber"
                      value={user.licenseNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <select
                    className="form-select border--primary mb-3 p-2"
                    onChange={handleSpecialtySelect}
                  >
                    <option value="">Select Speciality</option>
                    {specialities?.specialities.map((s) => (
                      <option
                        key={s._id}
                        value={s._id}
                        disabled={user.specializationId.some(
                          (spec) => spec._id === s._id
                        )}
                      >
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {/* Selected Specialties as Chips */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {user.specializationId.map((s) => (
                      <div
                        key={s._id}
                        className="flex items-center bg-blue-100 border border-cyan-500 rounded-xl px-3 py-1"
                      >
                        <span className="text-sm">{s.title}</span>
                        <button
                          type="button"
                          className="ml-2 cursor-pointer text-gray-600 hover:text-rose-600"
                          onClick={() => removeSpecialty(s._id)}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <div
                className={`grid grid-cols-1 gap-3 mb-3 ${
                  role === "doctor" ? "md:grid-cols-2" : ""
                }`}
              >
                {role === "doctor" && (
                  <input
                    type="number"
                    className="input-profile"
                    placeholder="Enter fees"
                    name="fees"
                    value={user.fees}
                    onChange={handleChange}
                  />
                )}
                <input
                  type="text"
                  className="input-profile"
                  placeholder="Enter phone"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                className="input-profile mb-3"
                placeholder="Enter address"
                name="addressLine"
                value={user.fullAddress.addressLine}
                onChange={handleAddressChange}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  className="input-profile"
                  placeholder="Enter city"
                  name="city"
                  value={user.fullAddress.city}
                  onChange={handleAddressChange}
                />
                <input
                  type="text"
                  className="input-profile"
                  placeholder="Enter state"
                  name="state"
                  value={user.fullAddress.state}
                  onChange={handleAddressChange}
                />
                <input
                  type="text"
                  className="input-profile"
                  placeholder="Enter country"
                  name="country"
                  value={user.fullAddress.country}
                  onChange={handleAddressChange}
                />
                <input
                  type="text"
                  className="input-profile"
                  placeholder="Enter pincode"
                  name="pincode"
                  value={user.fullAddress.pincode}
                  onChange={handleAddressChange}
                />
              </div>
              <button className="button w-full" type="submit" disabled={loader}>
                {loader ? (
                  <Loader />
                ) : (
                  <>
                    <LeftArrowBoxIcon />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditProfile;
