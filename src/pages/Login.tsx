import React, { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAllUsers } from "../API/JPA";
import Spinner from "../components/ui/Spinner/Spinner";
import UsersList from "../components/UsersList";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useFetching } from "../hooks/useFetching";
import User from "../models/User";
import { Pages } from "../routes/router";

export interface LoginProps {}

const Login: FC<LoginProps> = () => {
    const [users, setUsers] = useState<User[]>([]);
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    const [fetchUsers, areUsersLoading, error] = useFetching(async () => {
        const response = await getAllUsers();
        setUsers((await response.json()) as User[]);
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="Login">
            {isAuth && <Navigate to={`/${Pages.Index}`} />}
            {areUsersLoading ? <Spinner /> : <UsersList users={users} />}
        </div>
    );
};

export default Login;
