import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { projetSlice } from "./projects"
import { modalStore } from '@/stores/modalStore';
import { tagSlice } from './tags';
import { teamSlice } from './teams';
import { linkStore } from '@/stores/linkStore';
import { userSlice } from './users';

export const store = configureStore({
        reducer: combineSlices(projetSlice, modalStore, tagSlice, teamSlice, linkStore, userSlice)
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch