import { TagType } from "@/helpers/types"
import { PayloadAction } from "@reduxjs/toolkit"

export const loadTags = (state : { tags: TagType[] }, action : PayloadAction<TagType[]> ) => {
    state.tags = action.payload
}

export const  addTags = (state : { tags: TagType[] }, action : PayloadAction<TagType> ) => {
   const data = state.tags
   state.tags = [...data, action.payload]
}


export const  updateTags = (state : { tags: TagType[] }, action : PayloadAction<TagType> ) => {
   state.tags.map((items) => {
        if(items.id == action.payload.id){
            items.couleur = action.payload.couleur
            items.libelle = action.payload.libelle
        }
   })
}

