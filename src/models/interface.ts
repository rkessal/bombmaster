export interface IQuestion {
  id: string | number;
  type: EQuestionType;
  libelle: string;
  reponse: string | boolean;
}

export enum EQuestionType {
  VRAIFAUX = "VRAIFAUX",
  MULTIPLE = "MULTIPLE",
  ENIGME = "ENIGME",
}

export enum EEcran {
  PRINCIPAL = "PRINCIPAL",
  REGLES = "REGLES",
  CONFIGURATION = "CONFIGURATION",
  PARTIECONFIGUREE = "PARTIECONFIGUREE",
}
