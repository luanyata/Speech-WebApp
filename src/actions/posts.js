import {
    getPosts as GetPosts,
    getPostsByCategory as GetPostsByCategory
} from "../services/api";

export const GET_POSTS = 'GET_POSTS';

export function getPosts(posts, orderBy) {
    return {
        type: GET_POSTS,
        posts,
        orderBy,
    }
}

export function handleGetPosts(orderBy) {
    return (dispatch) => {
        return GetPosts()
            .then(posts => dispatch(getPosts(posts, orderBy)))
    }
}


export function handleGetPostsByCategory(category,orderBy) {
    return (dispatch) => {
        return GetPostsByCategory(category)
            .then(posts => dispatch(getPosts(posts,orderBy)))
    }

}
