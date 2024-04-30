import { Liste, Projet } from "@/helpers/types";
import { ADD_DATA_PROJET, GET_DATA_PROJET_ID, LOAD_DATA_PROJET, GET_DATA_LISTE_TICKET_PROJET_ID, ADD_DATA_LISTE_TICKET_PROJET_ID } from "./types";

export const loadProjetAction = (projets: Projet[]) => {
    return {
        type : LOAD_DATA_PROJET,
        payload : projets
    }
}

export const addProjetAction = (projet: Projet) => {
    return {
        type : ADD_DATA_PROJET,
        payload : projet
    }
}

export const selectProjetAction = (projetId: number) => {
    return {
        type : GET_DATA_PROJET_ID,
        payload : projetId
    }
}


export const loadListeTicketProjetAction = (id : number, listes : Liste[]) => {
    return {
        type : GET_DATA_LISTE_TICKET_PROJET_ID,
        payload : {id : id, data : listes}
    }
}

export const addListeTicketProjetAction = (id : number, listes : Liste) => {
    return {
        type : ADD_DATA_LISTE_TICKET_PROJET_ID,
        payload : {id : id, data : listes}
    }
}