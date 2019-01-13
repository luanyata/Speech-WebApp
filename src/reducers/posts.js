import {GET_POSTS} from "../actions/posts";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.posts;
        default:
            return state
    }
}