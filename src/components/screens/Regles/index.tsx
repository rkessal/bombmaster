import { useContext } from "react";
import logoBombMaster from "../../../assets/logo-bomb-master.png";
import persoBombMaster from "../../../assets/perso-bomb-master.png";
import ParametrageContext from "../../../context/ParametrageContext";
import { EEcran } from "../../../models/interface";

const Regles = () => {
  const parametrageContext = useContext(ParametrageContext);
  const onClickConfigurer = () => {
    parametrageContext?.setData((prev) => ({
      ...prev,
      ecran: EEcran.CONFIGURATION,
    }));
  };

  return (
    <div className="regles">
      <figure className="regles__logo">
        <img className="regles__logo__img" src={logoBombMaster} alt="" />
      </figure>
      <div className="regles__container">
        <h1 className="regles__title">Regles du jeu</h1>
      </div>
      <figure className="regles__perso">
        <img className="regles__perso__img" src={persoBombMaster} alt="" />
      </figure>
      <div className="regles__btns button__bottom-right">
        <button
          className="regles__btns__configurer"
          onClick={onClickConfigurer}
        >
          Configurer
        </button>
      </div>
    </div>
  );
};

export default Regles;
