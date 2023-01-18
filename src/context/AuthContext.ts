import { createContext } from "react";
import { IAuthContextType } from "../utils/types";

export const AuthContext = createContext<IAuthContextType>({token: '', setToken: () => {}});