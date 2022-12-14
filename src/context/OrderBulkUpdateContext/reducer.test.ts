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

  test('#8. should handle SET_CONTENT', () => {
    const startAction = {
      type: ACTIONS.SET_CONTENT,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({files: [undefined]});
  });

  test('#9. should handle FORMATTED_DATA', () => {
    const startAction = {
      type: ACTIONS.FORMATTED_DATA,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({formattedData: []});
  });

  test('#10. should handle SET_BUTTON_STEP', () => {
    const startAction = {
      type: ACTIONS.SET_BUTTON_STEP,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({buttonStep: 0});
  });

  test('#11. should handle SET_RESPONSE_VERIFICATION', () => {
    const startAction = {
      type: ACTIONS.SET_RESPONSE_VERIFICATION,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({
      responseVerification: {
        errors: [],
        success: [],
      },
    });
  });

  test('#12. should handle SET_RESPONSE_MASSIVE_SAVE', () => {
    const startAction = {
      type: ACTIONS.SET_RESPONSE_MASSIVE_SAVE,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({
      responseMassiveSave: {},
    });
  });

  test('#13. should handle SET_COUNT_RESPONSE_MASSIVE_SAVE', () => {
    const startAction = {
      type: ACTIONS.SET_COUNT_RESPONSE_MASSIVE_SAVE,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({
      countResponseMassiveSave: [],
    });
  });

  test('#14. should handle SET_REMAINING_TASKS', () => {
    const startAction = {
      type: ACTIONS.SET_REMAINING_TASKS,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({
      remainingTasks: 0,
    });
  });

  test('#15. should handle SET_PARAMETERS_LOADING', () => {
    const startAction = {
      type: ACTIONS.SET_PARAMETERS_LOADING,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({} as State, startAction)).toEqual({
      parametersLoading: {
        numberBatch: 0,
        totalArray: 0,
        totalTasks: 0,
      },
    });
  });
});
