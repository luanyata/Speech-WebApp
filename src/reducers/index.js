import {combineReducers} from "redux";
import categories from './categories'
import comments from './comment'
import post from './post'
import posts from './posts'
import authedUser from './authedUser'
import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    categories,
    comments,
    post,
    posts,
    authedUser,
    loadingBar: loadingBarReducer
})