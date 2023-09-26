import { InitialStateType } from "../App.type";

export const initalState = {
  personal_detail: {
    job_title: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "Nepal",
    city: "",
    address: "",
    personal_summary: "",
    image_path: "",
  },
  educational_details: [
    {
      college_name: "",
      degree: "",
      duration: "",
      location: "",
      description: "",
    },
  ],
  experiences: [
    {
      job_title: "",
      employer: "",
      duration: "",
      location: "",
      description: "",
    },
  ],
  projects: [{ name: "", description: "" }],
  skills: [{ name: "" }],
  hobbies: [{ name: "" }],
};

export const initAppState: InitialStateType = {
  ...initalState,
  dataToggler: true,
  stepperIndex: 0,
  setStepperIndex: () => {},
  setPersonalDetail: () => {},
  setEducationalDetails: () => {},
  setExperiences: () => {},
  setProjects: () => {},
  setSkills: () => {},
  setHobbies: () => {},
  setDataToggler: () => {},
};
