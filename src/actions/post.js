import {
    addPost as AddPost,
    editPost as EditPost,
    getPostById as GetPostById,
    deletePost as DeletePost,
    increaseVotes as IncreaseVotes,
    decreaseVotes as DecreaseVotes
} from "../services/api";

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DEL_POST';
export const INCREASE_VOTE = 'INC_VOTE';
export const DECREASE_VOTE = 'DEC_VOTE';


function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function handleAddPost(newPost) {
    return (dispatch) => {
        return AddPost(newPost)
            .then(post => dispatch(addPost(post)))
    }
}

function editPost(post) {
    return {
        type: EDIT_POST,
        post
    }
}


export function handleEditPost(oldPost) {
    return (dispatch) => {
        return EditPost(oldPost)
            .then(post => dispatch(editPost(post)))
    }
}

function getPost(post) {
    return {
        type: GET_POST,
        post
    }
}

export function handleGetPost(postId) {
    return (dispatch) => {
        return GetPostById(postId)
            .then(post => dispatch(getPost(post)))
    }
}

function deletePost(post) {
    return {
        type: DELETE_POST,
        post
    }
}

export function handleDeletePost(postId) {
    return (dispatch) => {
        return DeletePost(postId)
            .then(post => dispatch(deletePost(post)))
    }
}

function increaseVotes(post) {
    return {
        type: INCREASE_VOTE,
        post
    }
}

export function handleIncreaseVote(oldPost) {
    console.log(oldPost, 'OldPost');
    return (dispatch) => {
        return IncreaseVotes(oldPost.id)
            .then(post => dispatch(increaseVotes(post)))
    }
}

function decreaseVotes(post) {
    return {
        type: DECREASE_VOTE,
        post
    }
}

export function handleDecreaseVote(oldPost) {
    return (dispatch) => {
        return DecreaseVotes(oldPost.id)
            .then(post => dispatch(decreaseVotes(post)))
    }
}

