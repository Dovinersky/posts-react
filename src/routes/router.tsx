import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import About from "pages/About";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import PostsView from "pages/PostsView";

export enum Pages {
    Index = "",
    Login = "login",
    User = "user",
    Posts = "posts",
    UserPosts = ":id",
    About = "about",
}

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Header />
                <div className="content-container">
                    <Outlet />
                </div>
                <Footer />
            </>
        ),
        path: Pages.Index,
        children: [
            { element: <PostsView />, index: true },
            { element: <About />, path: Pages.About },
            { element: <Login />, path: Pages.Login },
        ],
        errorElement: <NotFound />,
    },
]);
