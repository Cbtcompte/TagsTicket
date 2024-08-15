import { Teams } from "@/helpers/types"
import { PayloadAction } from "@reduxjs/toolkit"

export const loadTeams = (state : { teams: Teams[] }, action : PayloadAction<Teams[]> ) => {
    state.teams = action.payload
}

export const  addTeams = (state : { teams: Teams[] }, action : PayloadAction<Teams> ) => {
   const data = state.teams
   state.teams = [...data, action.payload]
}


export const  updateTeams = (state : { teams: Teams[] }, action : PayloadAction<Teams> ) => {
   state.teams.map((items) => {
        if(items.id == action.payload.id){
            items.name = action.payload.name
        }
   })
}

