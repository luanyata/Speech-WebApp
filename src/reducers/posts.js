import {GET_POSTS} from "../actions/posts";
import {INCREASE_VOTE, DECREASE_VOTE, ADD_POST, GET_POST, DELETE_POST} from "../actions/post";

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_POST:
            return state.concat([action.post]);
        case GET_POSTS:
            switch (action.orderBy) {
                case 'DATE':
                    return action.posts.sort((a, b) => b.timestamp - a.timestamp);
                case 'VOTES':
                    return action.posts.sort((a, b) => b.voteScore - b.voteScore);
                default:
                    return action.posts;
            }

        case GET_POST:
            return state.filter(post => post.id === action.post.id);

        case DELETE_POST:
            return state.filter((post) => post.id !== action.post.id);

        case INCREASE_VOTE:
        case DECREASE_VOTE:
            return state.map(post =>
                post.id === action.post.id ? action.post : post);
        default:
            return state
    }
}