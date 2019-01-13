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
export const DEL_POST = 'DEL_POST';
export const INC_VOTE = 'INC_VOTE';
export const DEC_VOTE = 'DEC_VOTE';


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
        type: DEL_POST,
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
        type: INC_VOTE,
        post
    }
}

export function handleIncVote(postId) {
    return (dispatch) => {
        return IncreaseVotes(postId)
            .then(post => dispatch(increaseVotes(post)))
    }
}

function decreaseVotes(post) {
    return {
        type: DEC_VOTE,
        post
    }
}

export function handleDecVote(postId) {
    return (dispatch) => {
        return DecreaseVotes(postId)
            .then(post => dispatch(decreaseVotes(post)))
    }
}

