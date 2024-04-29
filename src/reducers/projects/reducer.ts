import { localData } from "@/helpers/services"
import { ConbimeListeProjet, Projet } from "@/helpers/types"
import { PayloadAction } from "@reduxjs/toolkit"

export const loadProjet = (state : { projets: Projet[] }, action : PayloadAction<Projet[]> ) => {
    state.projets = action.payload
}

export const  addProjet = (state : { projets: Projet[] }, action : PayloadAction<Projet> ) => {
   const data = state.projets
   state.projets = [...data, action.payload]
}

export const  getProjetId = (state : { projetId: number, projets : Projet[],projet : Projet }, action : PayloadAction<number> ) => {
   localData.set('projetId', action.payload.toString())
   state.projetId = action.payload
   state.projet = state.projets.filter((item) => item.id == action.payload)[0] 
}


export const loadListeTicketProjet = (state : { projets: Projet[], projet : Projet }, action : PayloadAction<ConbimeListeProjet> ) => {
   const indice = state.projets.findIndex((item) => item.id == action.payload.id)
   state.projets = [...state.projets.slice(0, indice), {...state.projets[indice], 'listeDtos' : action.payload.data}, ...state.projets.slice(indice+1)]
   console.log(state.projets)
   state.projet = {...state.projets[indice], 'listeDtos' : action.payload.data}
}

// export const  updateProjet = (state : Projet, action : PayloadAction<object> ) => {
//     console.log(state, action)
// }

// export const  deleteProjet = (state : Projet, action : PayloadAction<number> ) => {
//     console.log(state, action)
// }