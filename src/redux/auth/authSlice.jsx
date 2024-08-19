import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operationsAuth";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => builder
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload
    })
})

export const authReducer = authSlice