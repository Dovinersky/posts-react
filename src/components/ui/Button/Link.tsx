import React from "react";
import { Link as DOMLink } from "react-router-dom";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = () => {
    return <DOMLink to=""></DOMLink>;
};

export default Link;
