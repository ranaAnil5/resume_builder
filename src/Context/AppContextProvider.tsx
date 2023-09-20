import { ReactNode, useState } from "react";
import {
  EducationalDetail,
  Experience,
  Hobbie,
  InitialState,
  PersonalDetail,
  Skill,
  Stepper,
  initalState,
} from "./initialAppState";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [appState, setAppState] = useState<InitialState>(initalState);

  const setStepper = (stepper: Partial<Stepper>) => {
    setAppState((prev) => ({
      ...prev,
      stepper: { ...prev.stepper, ...stepper },
    }));
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
      value={{
        ...appState,
        setStepper,
        setPersonalDetail,
        setEducationalDetails,
        setExperiences,
        setSkills,
        setHobbies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
