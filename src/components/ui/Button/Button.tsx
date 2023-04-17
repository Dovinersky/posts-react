import React, { FC, ReactNode } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "text" | "outlined" | "contained";
    color?: "default" | "accent";
    corners?: "rounded" | "straight" | "circle-sides";
    padding?: "none" | "small" | "normal";
    children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
    variant = "contained",
    color = "default",
    corners = "rounded",
    padding = "normal",
    children,
    ...props
}) => {
    let classNames = `uikit-button ${variant} ${color} ${corners} ${props.className ?? ""}`.trimEnd();
    return (
        <button {...props} className={classNames}>
            {children}
        </button>
    );
};

export default Button;
