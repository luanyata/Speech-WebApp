import {combineReducers} from "redux";
import categories from './categories'
import comments from './comment'
import posts from './posts'
import authedUser from './authedUser'
import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    categories,
    comments,
    posts,
    authedUser,
    loadingBar: loadingBarReducer
})