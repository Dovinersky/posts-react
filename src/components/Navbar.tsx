import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "hooks/storeHooks";
import { Pages } from "../routes/router"; // required such import

export interface NavbarProps {
    children: ReactNode[];
}

const Navbar = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    return (
        <nav className="header-nav">
            {isAuth && <Link to={Pages.Index}>Posts</Link>}
            <Link to={Pages.About}>About</Link>
            {!isAuth && <Link to={Pages.Login}>Login</Link>}
        </nav>
    );
};

export default Navbar;
