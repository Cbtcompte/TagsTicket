import { Teams } from "@/helpers/types";
import { ADD_DATA_TEAMS, LOAD_DATA_TEAMS, UPDATE_DATA_TEAMS } from "./types";

export const loadTeamAction = (tags: Teams[]) => {
    
    return {
        type : LOAD_DATA_TEAMS,
        payload : tags
    }
}

export const updateTeamAction = (tag: Teams) => {
    return {
        type : UPDATE_DATA_TEAMS,
        payload : tag
    }
}
export const addTeamAction = (tag: Teams) => {
    return {
        type : ADD_DATA_TEAMS,
        payload : tag
    }
}