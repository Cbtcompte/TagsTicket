import { createSlice } from '@reduxjs/toolkit'
import * as reducers from './reducer';
import { Users } from '@/helpers/types';

const users : Users[] = [];

export const userSlice = createSlice({
  name: 'users',
  initialState : {users : users},
  reducers: reducers,
  reducerPath: "users"
})