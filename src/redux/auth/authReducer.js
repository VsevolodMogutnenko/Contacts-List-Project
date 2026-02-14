import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, refreshUser } from "./authOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => 
        builder.addCase(register.pending, (state, action) => state)
    .addCase(register.rejected, (state, action) => {
        state.user = {name: null, email: null}
        state.token = null
        state.isLoggedIn = false
        state.isRefreshing = false
    })
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
        state.isRefreshing = false
    })
})