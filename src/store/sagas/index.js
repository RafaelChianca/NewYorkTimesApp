import { Alert } from 'react-native';
import { call, all, put, takeLatest } from 'redux-saga/effects'
import api from '../../services/api';
import { scienceTypes, technologyTypes } from '../actionTypes';
import * as NewsActions from '../actions/news';
import { apiKey } from '../../settings/apiSetup';

function * listTechnologyNews ( action ) {
    try {
        const response = yield call(api.get,`technology.json?api-key=${apiKey}`);
        yield put(NewsActions.listTechnologySucceeded(response.data.results));
    } catch (error) {
        Alert.alert("Error loading list!", error.message);
        yield put(NewsActions.listTechnologyFailed());
    }
}

function * listScienceNews ( action ) {
    try {
        const response = yield call(api.get,`science.json?api-key=${apiKey}`);
        yield put(NewsActions.listScienceSucceeded(response.data.results));
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