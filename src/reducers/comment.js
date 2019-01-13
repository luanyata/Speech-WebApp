import {
    ADD_COMMENT,
    GET_COMMENTS,
    DELETE_COMMENT,
    EDIT_COMMENT,
    INCREASE_COMMENT_VOTES,
    DECREASE_COMMENT_VOTES
} from '../actions/comments'

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            };

        case GET_COMMENTS:
            return action.comments;

        case DELETE_COMMENT:
            return state.filter((comment) => comment.id !== action.comment.id);

        case EDIT_COMMENT:
        case INCREASE_COMMENT_VOTES:
        case DECREASE_COMMENT_VOTES:
            return state.map((comment) =>
                comment.id === action.comment.id ? action.comment : comment);
        default:
            return state
    }
}