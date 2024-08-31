import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null, password: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    reducers: {
       register(state, action){
          state.user = action.payload
          state.isLoggedIn = true
       }
    }
})

export const authReducer = authSlice.reducer
export const {register} = authSlice.actions