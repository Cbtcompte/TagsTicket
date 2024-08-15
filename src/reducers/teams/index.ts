import { createSlice } from '@reduxjs/toolkit'
import * as reducers from './reducer';
import { Teams } from '@/helpers/types';

const teams : Teams[] = [];

export const teamSlice = createSlice({
  name: 'teams',
  initialState : {teams : teams},
  reducers: reducers,
  reducerPath: "teams"
})