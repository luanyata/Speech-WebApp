import {getInitialData} from "../services/api";
import {getCategories} from "./categories";
import {getPosts} from "./posts"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({categories, posts}) => {
                dispatch(getCategories(categories));
                dispatch(getPosts(posts));
            })
    }
}