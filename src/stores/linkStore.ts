import { RootState } from '@/reducers';
import { createSlice } from '@reduxjs/toolkit';

const urlId : string = '1';

export const gettersState = (initialState : RootState) => initialState.url

export const linkStore = createSlice({
        name : 'url',
        initialState : { urlId },
        reducers : {
           changeUrl : (state, action) => {
            console.log(action)
                state.urlId = action.payload
           }
        }
    }
)