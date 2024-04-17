import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { projetSlice } from "./projects"
import { modalStore } from '@/stores/modalStore';

export const store = configureStore({
        reducer: combineSlices(projetSlice, modalStore)
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch