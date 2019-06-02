import actionTypes from "../actionTypes";

const initialState = {
  isChefiIDLoanding: true,
  chef: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CHEFSID: {
      return {
        ...state,
        isChefiIDLoanding: true,
        chef: []
      };
    }
    case actionTypes.GET_CHEFSID_SUCCESS: {
      return {
        ...state,
        isChefiIDLoanding: false,
        chef: action.chef
      };
    }
    default:
      return state;
  }
}