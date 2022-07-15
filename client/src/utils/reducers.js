import { useReducer } from "react";
import { SET_USER, SET_GUIDE } from './actions';


export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER: 
      return {
        ...state,
        user: action.user
      };
    case SET_GUIDE: 
      return {
        ...state, 
        guide: action.guide
      }
    default:
      return state;
  }

}

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
