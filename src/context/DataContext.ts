import { createContext } from "react";
import { IDataContextType } from "../utils/types";

export const DataContext = createContext<IDataContextType>({appointments: [], setAppointments: () => {}});