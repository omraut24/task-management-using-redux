import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, name, details, date, time, status } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.details = details;
                existingUser.date = date;
                existingUser.time = time;
                existingUser.status = status;
            }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;