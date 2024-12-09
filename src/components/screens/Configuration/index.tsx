import { useContext, useState } from "react";
import ChoixQuestion from "./ChoixQuestion";
import ParametrageContext from "../../../context/ParametrageContext";
import { EQuestionType } from "../../../models/interface";
import logoBombMaster from "../../../assets/logo-bomb-master.png";

const questionTypes = [
  {
    label: "VRAI / FAUX",
    value: EQuestionType.VRAIFAUX,
    niveau: "facile",
  },
  {
    label: "REPONSE MULTIPLES",
    value: EQuestionType.MULTIPLE,
    niveau: "intermediaire",
  },
  {
    label: "VRAI / FAUX",
    value: EQuestionType.ENIGME,
    niveau: "difficile",
  },
];

const Configuration = () => {
  const [step, setStep] = useState(1);
  const parametrageContext = useContext(ParametrageContext);
  const [choixQuestion, setChoixQuestion] = useState(null);

  const handleSelectionner = (value) => {
    setChoixQuestion(value);
  };

  return (
    <div className="configuration">
      <figure className="configuration__logo">
        <img className="configuration__logo__img" src={logoBombMaster} alt="" />
      </figure>
      {parametrageContext?.data.questions.length !== 12 && (
        <div className="configuration__inner">
          <h1 className="configuration__title">Configuration</h1>
          <h2>Selectionner le type de question</h2>
          <>
            {choixQuestion ? (
              <ChoixQuestion
                setChoixQuestion={setChoixQuestion}
                type={choixQuestion}
              />
            ) : (
              <div className="configuration__choix-question">
                {questionTypes.map(({ label, value, niveau }) => (
                  <div>
                    <div className="configuration__choix-question__label">
                      {label}
                    </div>
                    <div className="configuration__choix-question__difficulte">
                      <p>Niveau de difficulte :</p>
                      <span
                        className={`configuration__choix-question__niveau-${niveau}`}
                      >
                        {niveau}
                      </span>
                    </div>
                    <button onClick={() => handleSelectionner(value)}>
                      Selectionner
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default Configuration;
