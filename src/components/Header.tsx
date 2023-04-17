import React, { FC, useState } from "react";
import UserCard from "./UserCard";
import ThemeButton from "./ui/Button/ThemeButton";
import { useAppSelector } from "../hooks/storeHooks";
import Navbar from "./Navbar";

const Header: FC = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    return (
        <header className="Header">
            <div className="content-container">
                <div className="header-title">
                    <p className="header-brand">Lorem Posts</p>
                    <Navbar />
                    <ThemeButton />
                    {isAuth && <UserCard />}
                </div>
            </div>
        </header>
    );
};

export default Header;
