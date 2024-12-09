import { useContext } from "react";
import ParametrageContext from "../../../context/ParametrageContext";
import { EEcran } from "../../../models/interface";
import logoBombMaster from "../../../assets/logo-bomb-master.png";

const Principal = () => {
  const parametrageContext = useContext(ParametrageContext);
  const onClickConfigurer = () => {
    parametrageContext?.setData((prev) => ({
      ...prev,
      ecran: EEcran.REGLES,
    }));
  };

  const onClickQuitter = () => {
    console.log("quitter");
  };
  return (
    <div className="principal">
      <figure className="principal__logo">
        <img className="principal__logo__img" src={logoBombMaster} alt="" />
      </figure>
      <div className="principal__btns">
        <button
          className="principal__btns__configurer"
          onClick={onClickConfigurer}
        >
          Configurer
        </button>
        <button className="principal__btns__quitter" onClick={onClickQuitter}>
          Quitter
        </button>
      </div>
    </div>
  );
};

export default Principal;
