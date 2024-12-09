import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { EEcran } from "../models/interface";

export const dataParametre = {
  chrono: 600,
  tempMalus: 15,
  vies: 3,
};

export const defaultData = {
  id: "-1",
  idGame: "-1",
  chrono: dataParametre.chrono,
  vies: dataParametre.vies,
  questions: [],
  ecran: EEcran.PRINCIPAL,
};

type IParametrageContext = {
  data: any;
  setData: Dispatch<SetStateAction<any>>;
};

const ParametrageContext = createContext<IParametrageContext | null>(null);
export default ParametrageContext;

export const ParametrageProvider = ({ children }: any) => {
  const [data, setData] = useState(defaultData);

  const parametrageProviderValue = useMemo(
    () => ({
      data,
      setData,
    }),
    [data, setData]
  );

  window.parametrageContext = { ...parametrageProviderValue };

  return (
    <ParametrageContext.Provider value={{ ...parametrageProviderValue }}>
      {children}
    </ParametrageContext.Provider>
  );
};
