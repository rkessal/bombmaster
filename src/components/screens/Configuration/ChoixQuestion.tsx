import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ParametrageContext from "../../../context/ParametrageContext";
import { EQuestionType } from "../../../models/interface";

const QUESTIONS_LIST_SIZE = 12;

const ChoixQuestion = ({ type, setChoixQuestion }) => {
  const parametrageContext = useContext(ParametrageContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (questions.length === QUESTIONS_LIST_SIZE) {
      parametrageContext?.setData((prev) => {
        const newState = { ...prev };
        newState.questions = questions;
        return newState;
      });

      setChoixQuestion(null);
    }
  }, [questions]);

  switch (type) {
    case EQuestionType.VRAIFAUX:
      return <VraiFaux setQuestions={setQuestions} />;

    case EQuestionType.MULTIPLE:
      return <Multiple setQuestions={setQuestions} />;

    case EQuestionType.ENIGME:
      return <Enigme setQuestions={setQuestions} />;

    default:
      break;
  }
};

const VraiFaux = ({ setQuestions }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const questions = [];

    for (let i = 0; i < QUESTIONS_LIST_SIZE; i++) {
      const id = formData.get(`${i}-id`);
      const libelle = formData.get(`${i}-input`) || "";
      const reponse = formData.get(`${i}-radio`) || "VRAI";

      questions.push({
        id,
        type: "VRAIFAUX",
        libelle,
        reponse,
      });
    }

    console.log(questions);

    setQuestions(questions);
  };
  return (
    <form className="choix-question__form" onSubmit={handleSubmit}>
      {Array.from({ length: QUESTIONS_LIST_SIZE }).map((_, index) => {
        const id = uuidv4();
        return (
          <div key={id} className="choix-question__question">
            <div>Question {index + 1}</div>
            <input type="hidden" name={`${index}-id`} value={id} />
            <input
              className="choix-question__question__input"
              name={`${index}-input`}
              placeholder={`Question ${index + 1}`}
            />
            <div>
              <label>
                <input
                  type="radio"
                  name={`${index}-radio`}
                  value="VRAI"
                  defaultChecked
                />
                VRAI
              </label>
              <label>
                <input type="radio" name={`${index}-radio`} value="FAUX" />
                FAUX
              </label>
            </div>
          </div>
        );
      })}
      <button type="submit">Enregistrer</button>
    </form>
  );
};

const Multiple = ({ setQuestions }) => {
  console.log("hello");
  return <div>multiple</div>;
};

const Enigme = ({ setQuestions }) => {
  return <div>enigme</div>;
};

export default ChoixQuestion;
