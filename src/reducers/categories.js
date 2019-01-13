import {CATEGORIES} from "../actions/categories";

export default function (state = {}, action) {
    switch (action.type) {
        case CATEGORIES:
            return action.categories;
        default:
            return state
    }
}