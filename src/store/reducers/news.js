import { technologyTypes, scienceTypes } from "../actionTypes";

const INITIAL_STATE = {
    error: false,
    loading: false,
    technology: [],
    science: [],
}

function news(state = INITIAL_STATE, action) {

    switch (action.type) {
        case technologyTypes.REQUESTED:
            return { ...state, loading: true }
        case technologyTypes.SUCCEEDED:
            return { ...state, error: false, loading: false, technology: action.payload.technologyList }
        case technologyTypes.FAILED:
            return { ...state, error: true, loading: false }
        case scienceTypes.REQUESTED:
            return { ...state, loading: true }
        case scienceTypes.SUCCEEDED:
            return { ...state, error: false, loading: false, science: action.payload.scienceList }
        case scienceTypes.FAILED:
            return { ...state, error: true, loading: false }
        default:
            return state;
    }
}

export default news;
