import React, { FC } from "react";
import UserCard from "./UserCard";
import ThemeButton from "./ui/Button/ThemeButton";
import Navbar from "./Navbar";
import { useAppSelector } from "hooks/storeHooks";

const Header: FC = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    return (
        <header className="header">
            <div className="content-container">
                <div className="header-title">
                    <p className="header-brand">Lorem Posts</p>
                    <p className="header-brand-shortened">LP</p>
                    <Navbar />
                    <div className="header-options">
                        <ThemeButton />
                        {isAuth && <UserCard />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
