import {
    ADD_POST,
    EDIT_POST,
    GET_POST,
    DELETE_POST,
    INCREASE_VOTE,
    DECREASE_VOTE
} from "../actions/post";

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                [action.post.id]: action.post
            };

        case GET_POST:
            return action.post;

        case DELETE_POST:
            return state.filter((post) => post.id !== action.post.id);

        case EDIT_POST:
        case INCREASE_VOTE:
        case DECREASE_VOTE:
            return action.post;

        default:
            return state;

    }
}