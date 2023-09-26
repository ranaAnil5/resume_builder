import { ReactNode, useState } from "react";
import {
  EducationalDetail,
  Experience,
  Hobbie,
  InitialState,
  PersonalDetail,
  Project,
  Skill,
  initalState,
} from "./initialAppState";
import AppContext from "./AppContext";
import { dummyAppState } from "./dummyAppState";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [appState, setAppState] = useState<InitialState>(initalState);
  const [appDataToggler, setAppDataToggler] = useState(true); //toggle for user and dummy data
  const [stepper, setStepper] = useState(0);

  const setDataToggler = () => {
    setAppDataToggler(!appDataToggler);
  };

  const setStepperIndex = (stepperIndex: number) => {
    setStepper(stepperIndex);
  };

  const setPersonalDetail = (personalData: Partial<PersonalDetail>) => {
    setAppState((prev) => ({
      ...prev,
      personal_detail: { ...prev.personal_detail, ...personalData },
    }));
  };

  const setEducationalDetails = (educationalData: EducationalDetail[]) => {
    setAppState((prev) => ({
      ...prev,
      educational_details: educationalData,
    }));
  };

  const setExperiences = (experiences: Experience[]) => {
    setAppState((prev) => ({
      ...prev,
      experiences,
    }));
  };

  const setProjects = (projects: Project[]) => {
    setAppState((prev) => ({
      ...prev,
      projects,
    }));
  };

  const setSkills = (skills: Skill[]) => {
    setAppState((prev) => ({
      ...prev,
      skills,
    }));
  };

  const setHobbies = (hobbies: Hobbie[]) => {
    setAppState((prev) => ({
      ...prev,
      hobbies,
    }));
  };

  return (
    <AppContext.Provider
      value={
        appDataToggler
          ? {
              ...appState,
              dataToggler: appDataToggler,
              stepperIndex: stepper,
              setStepperIndex,
              setPersonalDetail,
              setEducationalDetails,
              setExperiences,
              setProjects,
              setSkills,
              setHobbies,
              setDataToggler,
            }
          : {
              ...dummyAppState,
              dataToggler: appDataToggler,
              stepperIndex: stepper,
              setStepperIndex,
              setPersonalDetail,
              setEducationalDetails,
              setExperiences,
              setProjects,
              setSkills,
              setHobbies,
              setDataToggler,
            }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
