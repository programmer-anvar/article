import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn:false,
    user:false
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        //Login
        loginUserStart: state =>{
            state.isLoading = true
        },
        loginUserSuccess: state =>{},
        loginUserFailure: state  =>{},
        //register
        registerUserStart: state =>{
            state.isLoading = true
        },
        registerUserSuccess: state =>{},
        registerUserFailure: state  =>{}
    }
})

export const {loginUserStart,loginUserSuccess,loginUserFailure,   registerUserStart} = authSlice.actions;
export default authSlice.reducer