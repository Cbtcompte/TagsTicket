import { RootState } from "..";

export const getProjets = (state : RootState) => state.projet.projets
export const getProjetId = (state : RootState) => state.projet.projetId
export const getOneProjet = (state : RootState) => state.projet.projets.filter((item) => item.id == state.projet.projetId)[0]