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
