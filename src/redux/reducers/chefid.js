import actionTypes from "../actionTypes";

const initialState = {
  isChefIDLoanding: true,
  chef: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CHEFSID: {
      return {
        ...state,
        isChefIDLoanding: true,
        chef: []
      };
    }
    case actionTypes.GET_CHEFSID_SUCCESS: {
      return {
        ...state,
        isChefIDLoanding: false,
        chef: action.chef
      };
    }
    default:
      return state;
  }
}