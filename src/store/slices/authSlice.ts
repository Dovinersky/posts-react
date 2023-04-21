import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserBase } from "models/User";

interface authState {
    isAuth: boolean;
    userBaseInfo: UserBase
}

const initialState: authState = {
    isAuth: false,
    userBaseInfo: {
        id: "",
        username: "",
        name: "",
        email: "",
    }
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authorize: (state, action: PayloadAction<UserBase>) => {
            state.isAuth = true;
            state.userBaseInfo = action.payload;
            
        },
        unauthorize: (state) => {
            state.isAuth = initialState.isAuth;
            state.userBaseInfo = initialState.userBaseInfo;
        },
    },
});

export default authSlice.reducer;
export const { authorize, unauthorize } = authSlice.actions;
