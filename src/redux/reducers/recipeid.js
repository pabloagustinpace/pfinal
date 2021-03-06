import actionTypes from "../actionTypes";

const initialState = {
  isRecipeIDLoanding: true,
  recipe: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_RECIPESID: {
      return {
        ...state,
        isRecipeIDLoanding: true,
        recipe: []
      };
    }
    case actionTypes.GET_RECIPESID_SUCCESS: {
      return {
        ...state,
        isRecipeIDLoanding: false,
        recipe: action.recipe
      };
    }
    default:
      return state;
  }
}