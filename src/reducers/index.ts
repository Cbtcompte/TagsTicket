import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { projetSlice } from "./projects"
import { modalStore } from '@/stores/modalStore';
import { tagSlice } from './tags';
import { teamSlice } from './teams';
import { linkStore } from '@/stores/linkStore';
import { userSlice } from './users';
import { ticketSlice } from './tickets';

export const store = configureStore({
        reducer: combineSlices(projetSlice, modalStore, tagSlice, teamSlice, linkStore, userSlice, ticketSlice)
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch