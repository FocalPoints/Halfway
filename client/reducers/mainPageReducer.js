import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  newLocation: '',
  pageToDisplay: 'login',
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        pageToDisplay: 'signup',
      };

    case types.LOG_IN:
    return {
      ...state,
      pageToDisplay: 'login',
    };

    default:
      return state;
  }
};

export default mainPageReducer;