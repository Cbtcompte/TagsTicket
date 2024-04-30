import { Ticket } from "@/helpers/types"
import { PayloadAction } from "@reduxjs/toolkit"

export const loadTicket = (state : { tickets: Ticket[] }, action : PayloadAction<Ticket[]> ) => {
    state.tickets = action.payload
}

// export const  addTicket = (state : { teams: Ticket[] }, action : PayloadAction<Ticket> ) => {
//    const data = state.teams
//    state.teams = [...data, action.payload]
// }


// export const  updateTicket = (state : { teams: Ticket[] }, action : PayloadAction<Ticket> ) => {
//    state.teams.map((items) => {
//         if(items.id == action.payload.id){
//             items.name = action.payload.name
//         }
//    })
// }

