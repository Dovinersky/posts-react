import React, { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Pages } from "../routes/router"; // required such import
import { useAppSelector } from "hooks/storeHooks";
import { useFetching } from "hooks/useFetching";
import { getAllUsers } from "API/JPA";
import User from "models/User";
import Spinner from "components/ui/Spinner/Spinner";
import UsersList from "components/UsersList";

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
        <div className="login-page">
            {isAuth && <Navigate to={`/${Pages.Index}`} />}
            {areUsersLoading ? <Spinner /> : <UsersList users={users} />}
        </div>
    );
};

export default Login;
