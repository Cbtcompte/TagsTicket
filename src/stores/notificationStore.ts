import { NotificationType } from '@/components/tools/Notification';
import { RootState } from '@/reducers';
import { createSlice } from '@reduxjs/toolkit';

const initialState : NotificationType = { 
    codeStatus: 200,
    message: "",
    placement: 'bottom'
}

export const gettersState = (initialState : RootState) => initialState.modals

export const notificationStore = createSlice({
        name : 'notification',
        initialState : initialState,
        reducers : {
            openNotification : (state, action) => {
                state = action.payload
            },
        }
    }
)