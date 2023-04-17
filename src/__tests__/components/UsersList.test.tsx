import React from "react";
import { render, screen } from "@testing-library/react";
import UsersList from "../../components/UsersList";
import { UserBase } from "../../models/User";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const users: UserBase[] = [
    {
        id: "1",
        name: "John",
        username: "Jonees",
        email: "jns@gmail.com",
    },
    {
        id: "2",
        name: "Marta",
        username: "MikaVi",
        email: "rewequ@gmail.com",
    },
];

describe("Users list", () => {
    test("Render with users", () => {
        render(
            <Provider store={store}>
                <UsersList users={users} />
            </Provider>
        );

        expect(screen.queryAllByTestId("user-list-item").length).toBe(users.length);

        users.forEach((user) => {
            expect(screen.getByText(user.name)).toBeInTheDocument();
        });
    });

    test("Render with empty array of users", () => {
        render(
            <Provider store={store}>
                <UsersList users={[]} />
            </Provider>
        );

        expect(screen.queryByTestId("user-list-item")).not.toBeInTheDocument();
    });
});
