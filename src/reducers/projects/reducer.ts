import { localData } from "@/helpers/services"
import { ConbimeListeProjet, Projet, Ticket } from "@/helpers/types"
import { PayloadAction } from "@reduxjs/toolkit"

export const loadProjet = (state : { projets: Projet[] }, action : PayloadAction<Projet[]> ) => {
    state.projets = action.payload
}

export const  addProjet = (state : { projets: Projet[] }, action : PayloadAction<Projet> ) => {
   const data = state.projets
   state.projets = [...data, action.payload]
}

export const  getProjetId = (state : { projetId: number }, action : PayloadAction<number> ) => {
   localData.set('projetId', action.payload.toString())
   state.projetId = action.payload
}

export const loadListeTicketProjet = (state : { projets: Projet[], tickets : Ticket[] }, action : PayloadAction<ConbimeListeProjet> ) => {
   const indice = state.projets.findIndex((item) => item.id == action.payload.id)
   state.projets = [...state.projets.slice(0, indice), {...state.projets[indice], 'listeDtos' : action.payload.data}, ...state.projets.slice(indice+1)]
}


export const addListeTicketProjet = (state : { projets: Projet[], tickets : Ticket[] }, action : PayloadAction<ConbimeListeProjet> ) => {
   const indice = state.projets.findIndex((item) => item.id == action.payload.id)
   state.projets = [...state.projets.slice(0, indice), {...state.projets[indice], 'listeDtos' : [...state.projets[indice].listeDtos, action.payload.data]}, ...state.projets.slice(indice+1)]
}