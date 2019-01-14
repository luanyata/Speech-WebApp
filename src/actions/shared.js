import {getInitialData} from "../services/api";
import {getCategories} from "./categories";
import {getPosts} from "./posts"
import {setAuthedUser} from "./authedUser";
import {showLoading, hideLoading} from "react-redux-loading";

const AUTHED_ID = 'luanyata';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({categories, posts}) => {
                dispatch(getCategories(categories));
                dispatch(getPosts(posts));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading())
            })
    }
}