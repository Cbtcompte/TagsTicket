import { Projet, ResponseDataAPI } from '@/helpers/types';
import { Axios as axios } from '..';

export const loadProjet = () => {
    return new Promise<ResponseDataAPI<object>>((resolve, reject) => {
        axios.get("/projet/all").then((response) => {
            if(response.data.codeStatus != 200){
                reject(response.data)
            }else{
                resolve(response.data);
            }
        }).catch((error) => {
            reject(error)
        })
    })
}


export const createProjet = (data : Projet) => {
    return new Promise<ResponseDataAPI<object>>((resolve, reject) => {
        axios.post("/projet", data).then((response) => {
            if(response.data.codeStatus != 200){
                reject(response.data)
            }else{
                resolve(response.data);
            }
        }).catch((error) => {
            console.log(error)
            reject(error)
        })
    })
}