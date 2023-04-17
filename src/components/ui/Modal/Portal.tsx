import React, { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export interface PortalProps {
    children: ReactNode;
}

const Portal: FC<PortalProps> = ({ children }) => {
    const [container] = useState(() => document.createElement("div"));
    // container.classList.add("Portal");
    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    });
    return ReactDOM.createPortal(children, container);
};

export default Portal;
