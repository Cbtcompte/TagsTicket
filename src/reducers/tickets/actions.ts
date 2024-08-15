import { Ticket } from "@/helpers/types";
import {LOAD_DATA_TICKETS } from "./types";

export const loadTicketAction = (tickets: Ticket[]) => {
    
    return {
        type : LOAD_DATA_TICKETS,
        payload : tickets
    }
}

// export const updateTeamAction = (tag: Teams) => {
//     return {
//         type : UPDATE_DATA_TEAMS,
//         payload : tag
//     }
// }
// export const addTeamAction = (tag: Teams) => {
//     return {
//         type : ADD_DATA_TEAMS,
//         payload : tag
//     }
// }