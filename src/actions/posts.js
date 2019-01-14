import {getPosts as GetPosts} from "../services/api";

export const GET_POSTS = 'GET_POSTS';

export function getPosts(posts, orderBy) {
    return {
        type: GET_POSTS,
        posts,
        orderBy
    }
}

export function handleGetPosts(orderBy, category = null) {
    return (dispatch) => {
        return GetPosts()
            .then(posts => dispatch(getPosts(posts,orderBy)))
    }
}