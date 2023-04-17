import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { toggle } from "../../../store/slices/themeSlice";
import { ClearDaySVG, BedtimeSVG } from "../../../assets/SVGHub";

const ThemeButton: FC = () => {
    const theme = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();
    return (
        <button
            onClick={() => {
                dispatch(toggle());
            }}
            className={`ThemeButton ${theme.currentModeName}`}
            data-test-id="theme-button"
        >
            {/* <span>{theme.isDark ? <BedtimeSVG /> : <ClearDaySVG />}</span> */}
            <span className="bright-wrapper">
                <ClearDaySVG />
            </span>
            <span className="dark-wrapper">
                <BedtimeSVG />
            </span>
        </button>
    );
};

export default ThemeButton;
