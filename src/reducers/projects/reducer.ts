import { localData } from "@/helpers/services"
import { Projet } from "@/helpers/types"
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

// export const  updateProjet = (state : Projet, action : PayloadAction<object> ) => {
//     console.log(state, action)
// }

// export const  deleteProjet = (state : Projet, action : PayloadAction<number> ) => {
//     console.log(state, action)
// }