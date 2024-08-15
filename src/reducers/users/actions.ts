import { Users } from "@/helpers/types";
import { ADD_DATA_USERS, LOAD_DATA_USERS, UPDATE_DATA_USERS } from "./types";

export const loadUserAction = (users: Users[]) => {
    
    return {
        type : LOAD_DATA_USERS,
        payload : users
    }
}

export const updateUserAction = (user: Users) => {
    return {
        type : UPDATE_DATA_USERS,
        payload : user
    }
}

export const deleteUserAction = (user: Users) => {
    return {
        type : UPDATE_DATA_USERS,
        payload : user
    }
}

export const addUserAction = (user: Users) => {
    return {
        type : ADD_DATA_USERS,
        payload : user
    }
}