import { Users } from "@/helpers/types"
import { PayloadAction } from "@reduxjs/toolkit"

export const loadUsers = (state : { users: Users[] }, action : PayloadAction<Users[]> ) => {
    state.users = action.payload
}

export const  addUsers = (state : { users: Users[] }, action : PayloadAction<Users> ) => {
   const data = state.users
   state.users = [...data, action.payload]
}


export const  updateUsers = (state : { users: Users[] }, action : PayloadAction<Users> ) => {
   state.users.map((items) => {
        if(items.id == action.payload.id){
            items.name = action.payload.name
        }
   })
}

