import actionTypes from "../actionTypes";

const initialState = {
  isGallerieIDLoanding: true,
  gallerie: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GALLERIESID: {
      return {
        ...state,
        isGallerieIDLoanding: true,
        gallerie: []
      };
    }
    case actionTypes.GET_GALLERIESID_SUCCESS: {
      return {
        ...state,
        isGallerieIDLoanding: false,
        gallerie: action.gallerie
      };
    }
    default:
      return state;
  }
}