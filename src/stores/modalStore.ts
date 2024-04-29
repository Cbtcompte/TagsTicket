import { ModalElement } from '@/components/modals/SimpleModal';
import { RootState } from '@/reducers';
import { createSlice } from '@reduxjs/toolkit';

const initialState : ModalElement = { 
    isModalOpen : false,
    title : '',
    children: null,
    footer : '',
    closeIcon : false,
}

export const gettersState = (initialState : RootState) => initialState.modals

export const modalStore = createSlice({
        name : 'modals',
        initialState : initialState,
        reducers : {
            openModal : (state, action) => {
                state.isModalOpen =  action.payload.isModalOpen
                state.children =  action.payload.children
                state.title =  action.payload.title
                state.footer =  action.payload.footer
                state.closeIcon =  action.payload.closeIcon
            },

            closeModal : (state, action) => {
                state.isModalOpen = action.payload
            }
        }
    }
)