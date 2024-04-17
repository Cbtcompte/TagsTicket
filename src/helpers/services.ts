import { createProjet, loadProjet } from "@/services/projects/projetServices";
import { Projet } from "./types";

export const getAllProjet = async () => await loadProjet()
export const insertProjet = async (data : Projet) => await createProjet(data)
export const localData =  {
    get(name : string){
        return localStorage.getItem(name)
    },

    set(name : string, value : string){
        return localStorage.setItem(name, value)
    }
}