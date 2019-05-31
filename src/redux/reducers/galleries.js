import actionTypes from "../actionTypes";

const initialState = {
  isGalleriesLoading: true,
  galleries: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GALLERIES: {
      return {
        ...state,
        isGalleriesLoading: true,
        galleries: []
      };
    }
    case actionTypes.GET_GALLERIES_SUCCESS: {
      return {
        ...state,
        isGalleriesLoading: false,
        galleries: action.galleries
      };
    }
    default:
      return state;
  }
}