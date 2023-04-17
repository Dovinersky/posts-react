import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";
import postsFilter from "./slices/postsFilterSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        postsFilter: postsFilter,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
