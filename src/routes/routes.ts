import About from "../pages/About";
import PostsView from "../pages/PostsView";
import { Pages } from "./router";

export const indexRoutes = [
    { element: PostsView, index: true },
    { element: About, path: Pages.About },
]