import React, { FC } from "react";
import UsersListItem from "./UsersListItem";
import { UserBase } from "models/User";

export interface UsersListProps {
    users: UserBase[];
    onUserSelect?(userId: number): void;
}

const UsersList: FC<UsersListProps> = ({ users, onUserSelect }) => {
    return (
        <div className="users-list">
            {users.map((user) => (
                <UsersListItem key={user.id} userBaseInfo={user as UserBase} />
            ))}
        </div>
    );
};

export default UsersList;
