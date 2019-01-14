import {GET_POSTS} from "../actions/posts";
import {INCREASE_VOTE, DECREASE_VOTE} from "../actions/post";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.posts;
        case INCREASE_VOTE:
        case DECREASE_VOTE:
            return state.map(post =>
                post.id === action.post.id ? action.post : post);
        default:
            return state
    }
}