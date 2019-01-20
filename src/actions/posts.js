import {getPosts as GetPosts} from "../services/api";

export const GET_POSTS = 'GET_POSTS';

export function getPosts(posts, orderBy, category) {
    return {
        type: GET_POSTS,
        posts,
        orderBy,
        category
    }
}

export function handleGetPosts(orderBy, category = null) {
    return (dispatch) => {
        return GetPosts()
            .then(posts => dispatch(getPosts(posts, orderBy, category)))
    }
}