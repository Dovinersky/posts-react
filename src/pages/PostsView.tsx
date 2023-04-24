import { FC } from "react";
import { Navigate } from "react-router-dom";
import { Pages } from "../routes/router"; // required such import
import { useAppSelector } from "hooks/storeHooks";
import PostsFilter from "components/PostsFilter";
import PostsList from "components/PostsList";

const PostsView: FC = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    if (!isAuth) return <Navigate to={`/${Pages.Login}`} />;
    
    return (
        <div className="posts-page">
            <PostsFilter />
            <PostsList />
        </div>
    );
};

export default PostsView;
