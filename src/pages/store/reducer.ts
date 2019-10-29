import { IAction, IState } from "./interfaces";
import * as actionTypes from './actions/actionTypes';

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY:
      return {
        ...state, 
        searchQuery: action.data
      }
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.END_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case actionTypes.ADD_SEARCH:
      return {
        ...state,
        searches: {
          ...state.searches,
          ...action.data
        }
      }
    default:
      return state;
  }
};
