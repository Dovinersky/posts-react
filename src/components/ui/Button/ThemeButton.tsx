import { BedtimeSVG, ClearDaySVG } from "assets/SVGHub";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import React, { FC } from "react";
import { toggle } from "store/slices/themeSlice";

const ThemeButton: FC = () => {
    const theme = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();
    return (
        <button
            onClick={() => {
                dispatch(toggle());
            }}
            className={`theme-button ${theme.currentModeName}`}
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
