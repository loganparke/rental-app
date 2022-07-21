import { useReducer } from "react";
import { SET_USER, SET_GUIDE, DELETE_SUB } from './actions';


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
    case DELETE_SUB:
      let newSubscriptionState = state.user.subscription.filter((subscription) => {
        return subscription._id !== action.id;
      })

      return {
        ...state,
        user: {
          ...state.user,
          subscription: newSubscriptionState,
        },
      };
    default:
      return state;
  }

}

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
