import { scienceTypes, technologyTypes } from "../actionTypes"

export const listScienceRequested = (page, limit) => ({
    type: scienceTypes.REQUESTED,
    payload: { page, limit },
})

export const listScienceSucceeded = (scienceList) => ({
    type: scienceTypes.SUCCEEDED,
    payload: { scienceList },
})

export const listScienceFailed = () =>({
    type: scienceTypes.FAILED,
})

export const listTechnologyRequested = (page, limit) => ({
    type: technologyTypes.REQUESTED,
    payload: { page, limit },
})

export const listTechnologySucceeded = (technologyList) => ({
    type: technologyTypes.SUCCEEDED,
    payload: { technologyList },
})

export const listTechnologyFailed = () =>({
    type: technologyTypes.FAILED,
})
