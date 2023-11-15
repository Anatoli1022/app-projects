import getCurrentTime from '../utils/getCurrentTime.js';
// import { ADD_CURRENT_TIME, CLEAR_ALL_TIMES } from './actionTypes.js';
import * as actionTypes from './actionTypes.js';
export function addCurrentTime() {
  return {
    type: actionTypes.ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

export function clearTimes() {
  return { type: actionTypes.CLEAR_ALL_TIMES };
}
