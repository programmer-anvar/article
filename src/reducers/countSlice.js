import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'count',
    initialState:{count:0},
    reducers:{
        plusCounter: (state,payload) => {
            state.count += 1
        },
        minuscounter: (state,payload) =>{
            state.count -= 1
        },
        resetcounter: (state,payload) =>{
            state.count = 0
        }
    }
});

export const {plusCounter,minuscounter,resetcounter} = countSlice.actions;
export default countSlice.reducer