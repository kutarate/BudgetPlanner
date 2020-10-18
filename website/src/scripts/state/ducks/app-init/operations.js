import { call, takeEvery } from 'redux-saga/effects';
import { CLASSNAMES } from '../../../constants';
import * as TYPES from './types';

function* setIsInitialised() {
    yield call((className) => document.body.classList.add(className), CLASSNAMES.appInit);
}

export const watchInitialiseApplication = takeEvery(
    TYPES.INITIALISE_APPLICATION,
    setIsInitialised
);