import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = ""

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``
}

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
    try {
        const user = await axios.post("/users/signup", credentials)
        setAuthHeader(user.data.token)
        return user.data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        const user = await axios.post("/users/signin", credentials)
        setAuthHeader(user.data.token)
        return user.data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout")
        clearAuthHeader()
        return
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token
    if(!persistedToken) {
        return thunkAPI.rejectWithValue("Something went wrong!")
    }
    try {
        setAuthHeader(persistedToken)
        const user = await axios.get("/users/current")
        return user.data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})