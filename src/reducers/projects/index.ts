import { localData } from './../../helpers/services';
import { createSlice } from '@reduxjs/toolkit'
import * as reducers from './reducer';
import { Projet } from "@/helpers/types"

const projets : Projet[] = [];
const projetId : number = localData.get('projetId') != null ? parseInt(localData.get('projetId') as string) : 0; 

export const projetSlice = createSlice({
  name: 'projet',
  initialState : {projets : projets, projetId : projetId},
  reducers: reducers,
  reducerPath: "projet"
})