import actionTypes from "../actionTypes";

const initialState = {
  isIngredientsidLoading: true,
  ingredient: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_INGREDIENTSID: {
      return {
        ...state,
        isIngredientsidLoading: true,
        ingredient: []
      };
    }
    case actionTypes.GET_INGREDIENTSID_SUCCESS: {
      return {
        ...state,
        isIngredientsidLoading: false,
        ingredient: action.ingredient
      };
    }
    default:
      return state;
  }
}