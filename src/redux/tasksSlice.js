import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name:'tasks',
  initialState:[],
  reducers:{
    addTask:(state,action)=>{
   state.push(action.payload);
    },
  },
});

export const {addTask} = tasksSlice.actions;
export default tasksSlice.reducer;
