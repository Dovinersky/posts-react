import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "API/JPA";
import User from "models/User";

const fetchUsers = createAsyncThunk("usersData/fetchUsers", async function (_, { rejectWithValue }) {
    try {
        const response = getAllUsers();
        return (await response).json();
    } catch {
        rejectWithValue("usersData/fetchUsers rejected");
    }
});

const initialState = {
    users: new Array<User>(),
    isPending: false,
    isFullfilled: true,
};

export const usersDataSlice = createSlice({
    name: "usersData",
    initialState,
    reducers: {},
    extraReducers: {
    },
});
