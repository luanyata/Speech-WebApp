import {
    addComment as AddComment,
    getPostComments as GetPostComment,
    deleteComment as DeleteComment,
    editComment as EditComment,
    increaseCommentVotes as IncreaseCommentVotes,
    decreaseCommentVotes as DecreaseCommentVotes,
} from "../services/api";

export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const INCREASE_COMMENT_VOTES = 'INCREASE_COMMENT';
export const DECREASE_COMMENT_VOTES = 'DECREASE_COMMENT';


function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function handleAddComment(newComment) {
    return (dispatch) => {
        return AddComment(newComment)
            .then(comment => dispatch(addComment(comment)))
    }
}

function getComments(comments) {
    return {
        type: GET_COMMENTS,
        comments
    }
}

export function handleGetComments(postId) {
    return (dispatch) => {
        return GetPostComment(postId)
            .then(comments => dispatch(getComments(comments)))
    }
}

function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export function handleDeleteComment(commentId) {
    return (dispatch) => {
        return DeleteComment(commentId)
            .then(comment => dispatch(deleteComment(comment)))
    }
}

function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

export function handleEditComment(oldComment) {
    return (dispatch) => {
        return EditComment(oldComment)
            .then(comment => dispatch(editComment(comment)))
    }
}

function increaseCommentVote(comment) {
    return {
        type: INCREASE_COMMENT_VOTES,
        comment
    }
}

export function handleIncreaseCommentVote(commentId) {
    return (dispatch) => {
        return IncreaseCommentVotes(commentId)
            .then(comment => dispatch(increaseCommentVote(comment)))
    }
}

function decreaseCommentVote(comment) {
    return {
        type: DECREASE_COMMENT_VOTES,
        comment
    }
}

export function handleDecreaseCommentVote(commentId) {
    return (dispatch) => {
        return DecreaseCommentVotes(commentId)
            .then(comment => dispatch(decreaseCommentVote(comment)))
    }
}