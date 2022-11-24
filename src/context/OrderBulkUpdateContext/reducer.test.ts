import {ACTIONS, initialState, reducer} from './reducer';
import {State} from './types';

describe('OrderBulkUpdate/Reducer', () => {
  test('#1. should handle UPLOAD_FILE_RESET', () => {
    const startAction = {
      type: ACTIONS.UPLOAD_FILE_RESET,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual(initialState);
  });

  test('#2. should handle UPLOAD_FILE_SUCCESS', () => {
    const startAction = {
      type: ACTIONS.UPLOAD_FILE_SUCCESS,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({
      status: 'success',
      files: [undefined],
      isValid: false,
    });
  });

  test('#3. should handle UPLOAD_FILE_ERROR', () => {
    const startAction = {
      type: ACTIONS.UPLOAD_FILE_ERROR,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({
      status: 'error',
      states: [],
      statesRepeated: 0,
      isValid: false,
    });
  });

  test('#4. should handle SET_IS_VALID', () => {
    const startAction = {
      type: ACTIONS.SET_IS_VALID,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({
      isValid: false,
    });
  });

  test('#6. should Default', () => {
    const startAction = {
      type: '',
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({});
  });

  test('#7. should handle SET_STEP', () => {
    const startAction = {
      type: ACTIONS.SET_STEP,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({step: 0});
  });
});
