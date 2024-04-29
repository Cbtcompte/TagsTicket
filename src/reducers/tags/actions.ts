import { TagType } from "@/helpers/types";
import { ADD_DATA_TAGS, LOAD_DATA_TAGS, UPDATE_DATA_TAGS } from "./types";

export const loadTagAction = (tags: TagType[]) => {
    return {
        type : LOAD_DATA_TAGS,
        payload : tags
    }
}

export const updateTagAction = (tag: TagType) => {
    return {
        type : UPDATE_DATA_TAGS,
        payload : tag
    }
}
export const addTagAction = (tag: TagType) => {
    return {
        type : ADD_DATA_TAGS,
        payload : tag
    }
}