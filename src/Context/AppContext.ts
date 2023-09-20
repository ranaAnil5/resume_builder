import { createContext } from "react";
import { InitialStateType } from "./initialAppState";

const AppContext = createContext<InitialStateType>({} as InitialStateType);

export default AppContext;
