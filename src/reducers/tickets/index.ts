import { createSlice } from '@reduxjs/toolkit'
import * as reducers from './reducer';
import { Ticket } from '@/helpers/types';

const tickets : Ticket[] = [];

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState : {tickets : tickets},
  reducers: reducers,
  reducerPath: "tickets"
})