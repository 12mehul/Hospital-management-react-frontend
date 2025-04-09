export const initialState = {
  step: 1,
  searchInput: "",
  isModalOpen: false,
  selectedSpeciality: {
    id: null,
    isFilter: "filterDoctors",
  },
  selectedDoctor: null,
  selectedSlot: null,
  selectedPatient: null,
};

export const bookAppointmentReducer = (state, action) => {
  switch (action.type) {
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: !state.isModalOpen };
    case "SET_SPECIALITY":
      return {
        ...state,
        selectedSpeciality: { id: action.payload, isFilter: "filterDoctors" },
        step: state.step + 1,
      };
    case "OPEN_DOCTOR_TAB":
      return {
        ...state,
        step: 2,
        selectedDoctor: null,
        selectedSpeciality: { id: null, isFilter: "allDoctors" },
      };
    case "SET_DOCTOR":
      return {
        ...state,
        selectedDoctor: action.payload.doctorId,
        selectedSpeciality: {
          id: action.payload.specialityId,
          isFilter: "selectedDoctor",
        },
        step: state.step + 1,
      };
    case "SET_SLOT":
      return {
        ...state,
        selectedSlot: action.payload,
        step: state.step + 1,
      };
    case "SET_SELECTED_PATIENT":
      return { ...state, selectedPatient: action.payload };
    case "RESET":
      return {
        ...initialState,
        selectedPatient: action.payload || null,
      };

    default:
      return state;
  }
};
