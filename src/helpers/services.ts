import { create, deleted, load, loadWithParam, update } from "@/services/services";
import { Global } from "./types";

export const getAllData = async (module : string) => await load(module)
export const getAllDataWithParam = async (module : string, id : number) => await loadWithParam(module, id)
export const insertData = async (data : Global, module : string) => await create(module, data)
export const updateData = async (id : number, data : Global, module : string) => await update(module, id, data)
export const deleteData = async (id : number, module : string) => await deleted(module, id)


export const localData =  {
    get(name : string){
        return localStorage.getItem(name)
    },

    set(name : string, value : string){
        return localStorage.setItem(name, value)
    }
}