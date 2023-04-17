import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type sortTypes = "title" | "content";

export interface postsFilterState {
    text: string;
    sort: sortTypes;
}

const initialState: postsFilterState = {
    text: "",
    sort: "title",
};

export const postsFilterSlice = createSlice({
    name: "postsFilter",
    initialState,
    reducers: {
        changeText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        changeSort: (state, action: PayloadAction<sortTypes>) => {
            state.sort = action.payload;
        }
    },
});

export default postsFilterSlice.reducer;
export const { changeText, changeSort } = postsFilterSlice.actions;
