import { createContext } from "react";
import { InitialStateType } from "../App.type";

const AppContext = createContext<InitialStateType>({} as InitialStateType);

export default AppContext;
