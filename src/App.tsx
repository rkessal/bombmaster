import { useContext } from "react";
import "./App.css";
import ParametrageContext from "./context/ParametrageContext";
import { EEcran } from "./models/interface";
import Principal from "./components/screens/Principal";
import Regles from "./components/screens/Regles";
import Configuration from "./components/screens/Configuration";
import PartieConfiguree from "./components/screens/PartieConfiguree";

const App = () => {
  const parametrageContext = useContext(ParametrageContext);

  const { data } = parametrageContext;

  switch (data.ecran) {
    case EEcran.PRINCIPAL:
      return <Principal />;

    case EEcran.REGLES:
      return <Regles />;

    case EEcran.CONFIGURATION:
      return <Configuration />;

    case EEcran.PARTIECONFIGUREE:
      return <PartieConfiguree />;

    default:
      break;
  }
  return (
    <main>
      <Configuration />
    </main>
  );
};

export default App;
