import {getCategories as GetCategories} from "../services/api";

export const CATEGORIES = 'CATEGORIES';


export function getCategories(categories) {
    return {
        type: CATEGORIES,
        categories
    }
}

export function handleGetCategories() {
    return (dispatch) => {
        return GetCategories()
            .then(categories => dispatch(getCategories(categories)))
    }
}