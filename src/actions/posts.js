import {getPosts as GetPosts} from "../services/api";

export const GET_POSTS = 'GET_POSTS';

function getPost(posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export function handleGetPosts() {
    return (dispatch) => {
        return GetPosts()
            .then(posts => dispatch(getPost(posts)))
    }
}