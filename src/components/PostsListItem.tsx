import React, { FC } from "react";
import Button from "./ui/Button/Button";

interface PostsListItemProps {
    id?: number | string;
    title: string;
    body: string;
    username: string;
    authorControlsRequired?: boolean;
    onPostCommentsClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const PostsListItem: FC<PostsListItemProps> = ({
    id,
    title,
    body,
    username,
    authorControlsRequired: controlsRequired,
    onPostCommentsClick: onCommentsClick,
}) => {
    return (
        <div className="posts-list-item">
            <p className="title">{title}</p>
            <p className="username">by {username}</p>
            <p className="body">{body}</p>
            <div className="controls">
                <Button value={id} variant="text" color="default" onClick={onCommentsClick}>
                    Comments
                </Button>
                {controlsRequired && (
                        <Button variant="text" color="default">
                            Edit
                        </Button>
                )}
            </div>
        </div>
    );
};

export default PostsListItem;
