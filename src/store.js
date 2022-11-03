import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/tasks/taskSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})