import { Alert } from 'react-native';
import { call, all, put, takeLatest } from 'redux-saga/effects'
// import api from '../../services/api';
import { scienceTypes, technologyTypes } from '../actionTypes';
import * as NewsActions from '../actions/news';
// import { useDispatch } from 'react-redux';
// import { useCallback } from 'react';

// const dispatch = useDispatch();

// const listTechnologyNews = useCallback(
//     async ({ action }) => {
//         try {
//             const page = action.payload.page;    
//             const limit = action.payload.limit;
//             dispatch(NewsActions.listTechnologySucceeded(['teste1', 'teste2']));
//         } catch (error) {
//             Alert.alert("Error loading list!", error.message);
//             dispatch(NewsActions.listTechnologyFailed());
//         }
//     },
//     [],
// );

// const listScienceNews = useCallback(
//     async ({ action }) => {
//         try {
//             const page = action.payload.page;    
//             const limit = action.payload.limit;
//             dispatch(NewsActions.listScienceSucceeded(['teste3', 'teste4']));
//         } catch (error) {
//             Alert.alert("Error loading list!", error.message);
//             dispatch(NewsActions.listScienceFailed());
//         }
//     },
//     [],
// );

function * listTechnologyNews ( action ) {
    try {
        const page = action.payload.page;    
        const limit = action.payload.limit;
        yield put(NewsActions.listTechnologySucceeded(['teste1', 'teste2']));
    } catch (error) {
        Alert.alert("Error loading list!", error.message);
        yield put(NewsActions.listTechnologyFailed());
    }
}

function * listScienceNews ( action ) {
    try {
        const page = action.payload.page;    
        const limit = action.payload.limit;
        yield put(NewsActions.listScienceSucceeded(['teste3', 'teste4']));
    } catch (error) {
        Alert.alert("Error loading list!", error.message);
        yield put(NewsActions.listScienceFailed());
    }
}

function * mySaga () {
    return yield all ([
        takeLatest(technologyTypes.REQUESTED, listTechnologyNews),
        takeLatest(scienceTypes.REQUESTED, listScienceNews),
    ])
}

export default mySaga;