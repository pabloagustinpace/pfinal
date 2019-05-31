import actionTypes from "../actionTypes";

const initialState = {
  isRecipeLoading: true,
  recipe: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_RECIPESID: {
      return {
        ...state,
        isRecipeLoading: true,
        recipe: []
      };
    }
    case actionTypes.GET_RECIPESID_SUCCESS: {
      return {
        ...state,
        isRecipeLoading: false,
        recipe: action.recipes
      };
    }
    default:
      return state;
  }
}