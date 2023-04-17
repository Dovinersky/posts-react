// JSONPlaceholder api
const RESOURCE = "https://jsonplaceholder.typicode.com";
const endpoint = (endpointPath?: string, params?: URLSearchParams) => `${RESOURCE}${endpointPath ?? ""}?${params ?? ""}`;

export const getAllUsers = async () => await fetch(endpoint("/users"));
export const getUser = async (id: number) => await fetch(endpoint(`/users/${id}`));

export const getCommentsByPost = async (postId: number) => await fetch(endpoint(`/post/${postId}/comments`));

export const getAllPosts = async () => await fetch(endpoint("/posts"));
export const getPaginatedPosts = async (postsPerPage: number, page: number) =>
    await fetch(endpoint("/posts", new URLSearchParams({ _page: `${page}`, _limit: `${postsPerPage}` })));
export const getPostsByUser = async (userId: number) =>
    await fetch(endpoint("/posts", new URLSearchParams({ userId: `${userId}` })));
