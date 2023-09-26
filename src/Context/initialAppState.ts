export interface PersonalDetail {
  job_title: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  personal_summary: string;
  image_path: string;
}

export interface EducationalDetail {
  college_name: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
}

export interface Experience {
  job_title: string;
  employer: string;
  duration: string;
  location: string;
  description: string;
}
export interface Project {
  name: string;
  description: string;
}

export interface Skill {
  name: string;
}

export interface Hobbie {
  name: string;
}

export interface InitialState {
  personal_detail: PersonalDetail;
  educational_details: EducationalDetail[];
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  hobbies: Hobbie[];
}

export interface InitialStateType extends InitialState {
  dataToggler: boolean;
  stepperIndex: number;
  setStepperIndex: (index: number) => void;
  setPersonalDetail: (personalData: Partial<PersonalDetail>) => void;
  setEducationalDetails: (educationalData: EducationalDetail[]) => void;
  setExperiences: (experienceData: Experience[]) => void;
  setProjects: (projectData: Project[]) => void;
  setSkills: (skill: Skill[]) => void;
  setHobbies: (hobbie: Hobbie[]) => void;
  setDataToggler: () => void;
}

// -------------initial state of app---------------

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
