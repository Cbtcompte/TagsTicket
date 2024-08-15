import { ResponseDataAPI, Global} from '@/helpers/types';
import { Axios as axios } from '.';

export const load = (module : string) => {
    return new Promise<ResponseDataAPI<object>>((resolve, reject) => {
        axios.get("/"+module+"/all").then((response) => {
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

export const loadWithParam = (module : string, id : number) => {
    return new Promise<ResponseDataAPI<object>>((resolve, reject) => {
        axios.get("/"+module+"/"+id).then((response) => {
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


export const update = (module : string, id : number, data : Global) => {
    return new Promise<ResponseDataAPI<object>>((resolve, reject) => {
        axios.put("/"+module+"/update/"+id, data).then((response) => {
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

export const create = (module : string, data : Global) => {
    return new Promise<ResponseDataAPI<object>>((resolve, reject) => {
        axios.post("/"+module+"/create", data).then((response) => {
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

export const deleted = (module : string, id : number) => {
    return new Promise<ResponseDataAPI<object>>((resolve, reject) => {
        axios.delete("/"+module+"/delete/"+id,).then((response) => {
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

