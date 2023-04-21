import React, { FC } from "react";
import { useAppDispatch } from "hooks/storeHooks";
import { UserBase } from "models/User";
import { authorize } from "store/slices/authSlice";

export interface UserListItemProps {
    userBaseInfo: UserBase;
}

const UsersListItem: FC<UserListItemProps> = ({ userBaseInfo }) => {
    const dispatch = useAppDispatch();
    return (
        <div
            className="UserListItem"
            onClick={() => {
                dispatch(authorize(userBaseInfo));
            }}
            data-testid="user-list-item"
        >
            <div className="username">{userBaseInfo.username}</div>
            <div className="name">{userBaseInfo.name}</div>
            <div className="email">{userBaseInfo.email}</div>
        </div>
    );
};

export default UsersListItem;
