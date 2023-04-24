import React, { FC } from "react";

export interface PostCommentProps {
    commentId: number | string;
    author: string;
    body: string;
}

const PostComment: FC<PostCommentProps> = ({ commentId, author, body }) => {
    return (
        <div className="post-comment">
            <p>by {author}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostComment;
