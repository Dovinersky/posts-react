import React, { FC, ReactNode } from "react";
import Button, { ButtonProps } from "./Button";

const PaginationButton: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Button variant="text" color="accent" corners="rounded" {...props}>
            {children}
        </Button>
    );
};

export default PaginationButton;
