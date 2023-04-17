import { FC } from "react";
import { Navigate } from "react-router-dom";
import PostsFilter from "../components/PostsFilter";
import PostsList from "../components/PostsList";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { Pages } from "../routes/router";

const PostsView: FC = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    if (!isAuth) return <Navigate to={`/${Pages.Login}`} />;
    
    return (
        <div className="PostsView">
            <PostsFilter />
            <PostsList />
        </div>
    );
};

export default PostsView;
