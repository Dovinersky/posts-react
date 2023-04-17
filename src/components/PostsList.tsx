import React, { useCallback, useEffect, useState } from "react";
import Pagination from "./ui/Pagination/Pagination";
import PostsListItem from "./PostsListItem";
import Post from "../models/Post";
import User from "../models/User";
import { useFetching } from "../hooks/useFetching";
import { getAllPosts, getAllUsers, getCommentsByPost, getPaginatedPosts } from "../API/JPA";
import Spinner from "./ui/Spinner/Spinner";
import { useAppSelector } from "../hooks/storeHooks";
import Modal from "./ui/Modal/Modal";
import PostComment from "./PostComment";
import Comment from "models/Comment";

const PostsList = () => {
    // Posts
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    // Comments
    const [comments, setComments] = useState<Comment[]>([]);
    const [isCommentsShown, setIsCommentsShown] = useState(false);
    // Users
    const [users, setUsers] = useState<User[]>([]);
    // Pagination
    const [selectedPage, setSelectedPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);
    // Store
    const textFilter = useAppSelector((state) => state.postsFilter.text);
    const sortFilter = useAppSelector((state) => state.postsFilter.sort);
    const authUser = useAppSelector((state) => state.auth.userBaseInfo);

    const postsPerPage = 20;

    const [fetchPosts, arePostsLoading, postsFetchError] = useFetching(async () => {
        // const response = await getAllPosts();
        const response = await getPaginatedPosts(postsPerPage, selectedPage);
        setMaxPages(Number(response.headers.get("x-total-count")) / postsPerPage);
        setPosts((await response.json()) as Post[]);
    });

    const [fetchUsers, areUsersLoading, usersFetchError] = useFetching(async () => {
        const response = await getAllUsers();
        setUsers((await response.json()) as User[]);
    });

    const [fetchComments, areCommentsLoading, commentsFetchError] = useFetching(async (postId: number) => {
        const response = await getCommentsByPost(postId);
        setComments((await response.json()) as Comment[]);
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [selectedPage]);

    useEffect(() => {
        if (arePostsLoading || areUsersLoading) return;

        let sort = (a: Post, b: Post) => a.title.localeCompare(b.title); // Sort by title as default
        if (sortFilter == "content") sort = (a: Post, b: Post) => a.body.localeCompare(b.body);

        if (textFilter)
            setFilteredPosts(
                posts.filter((post) => post.title.includes(textFilter) || post.body.includes(textFilter)).sort(sort)
            );
        else setFilteredPosts([...posts.sort(sort)]);
    }, [textFilter, sortFilter, arePostsLoading, areUsersLoading]);

    const onPaginationClickHandler = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSelectedPage(Number(event.currentTarget.innerHTML));
    }, []);

    const onPostCommentsClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsCommentsShown(true);
        fetchComments(event.currentTarget.value);
    };

    return (
        <div className="PostsList">
            {arePostsLoading ? (
                <Spinner />
            ) : (
                <>
                    <Pagination
                        pagesCount={maxPages}
                        selectedPage={selectedPage}
                        onPageClick={onPaginationClickHandler}
                    />
                    {!filteredPosts.length && <p>Posts not found</p>}
                    {filteredPosts.map((post) => (
                        <PostsListItem
                            key={post.id}
                            id={post.id}
                            username={users.find((user) => user.id == post.userId)!.username}
                            // authorControlsRequired={post.userId == authUser.id}
                            authorControlsRequired={false}
                            title={post.title}
                            body={post.body}
                            onPostCommentsClick={onPostCommentsClickHandler}
                        />
                    ))}
                    <Pagination
                        pagesCount={maxPages}
                        selectedPage={selectedPage}
                        onPageClick={onPaginationClickHandler}
                    />
                </>
            )}
            <Modal
                isShown={isCommentsShown}
                size="normal"
                controls="info"
                onSubmit={() => setIsCommentsShown(false)}
                onClose={() => setIsCommentsShown(false)}
            >
                <div className="PostCommentsList">
                    {areCommentsLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            {comments.map((comment) => (
                                <PostComment
                                    key={comment.id}
                                    commentId={comment.id}
                                    author={comment.email}
                                    body={comment.body}
                                />
                            ))}
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default PostsList;
