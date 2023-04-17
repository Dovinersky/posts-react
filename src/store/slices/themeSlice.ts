import { createSlice, isDraft, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const rootClasses = document.documentElement.classList;
export const BRIGHT_MODE_NAME = "theme-bright"; // STANDARD
export const DARK_MODE_NAME = "theme-dark";

export interface ThemeState {
    isDark: boolean;
    currentModeName: string;
}

const initialState: ThemeState = {
    isDark: false,
    currentModeName: BRIGHT_MODE_NAME,
};

export const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggle: (state) => {
            if (state.currentModeName == BRIGHT_MODE_NAME) {
                rootClasses.replace(BRIGHT_MODE_NAME, DARK_MODE_NAME);
                state.currentModeName = DARK_MODE_NAME;
                state.isDark = true;
                return;
            }
            rootClasses.replace(DARK_MODE_NAME, BRIGHT_MODE_NAME);
            state.currentModeName = BRIGHT_MODE_NAME;
            state.isDark = false;
        },
        setBright: (state) => {
            rootClasses.replace(state.currentModeName, BRIGHT_MODE_NAME);
            state.currentModeName = BRIGHT_MODE_NAME;
            state.isDark = false;
        },
        setDark: (state) => {
            rootClasses.replace(state.currentModeName, DARK_MODE_NAME);
            state.currentModeName = DARK_MODE_NAME;
            state.isDark = true;
        },
        setDefault: (state) => {
            if (state.currentModeName != BRIGHT_MODE_NAME) {
                rootClasses.replace(DARK_MODE_NAME, BRIGHT_MODE_NAME);
                state.currentModeName = DARK_MODE_NAME;
                state.isDark = true;
            }
        },
    },
});

export default ThemeSlice.reducer;
export const { toggle, setBright, setDark, setDefault } = ThemeSlice.actions;
// export const selectTheme = (state: RootState) => state.theme;
