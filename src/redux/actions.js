import axios from 'axios';
import actionTypes from "./actionTypes";
import { API_ENDPOINT_BASE } from '../constants';

export const getRecipes = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_RECIPES
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/recipes`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_RECIPES_SUCCESS,
         recipes: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_RECIPES_ERROR,
         error: error.response
       });
     });
  }
};

export const getRecipeID = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_RECIPESID
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/recipes/:idRecipe`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_RECIPESID_SUCCESS,
         recipe: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_RECIPESID_ERROR,
         error: error.response
       });
     });
  }
};

export const getChefs = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_CHEFS
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/chefs`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_CHEFS_SUCCESS,
         chefs: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_CHEFS_ERROR,
         error: error.response
       });
     });
  }
};

export const getIngredients = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_INGREDIENTS
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/ingredients`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_INGREDIENTS_SUCCESS,
         ingredients: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_INGREDIENTS_ERROR,
         error: error.response
       });
     });
  }
};

export const getIngredientsByID = (id) => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_INGREDIENTSID
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/ingredients/${id}`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_INGREDIENTSID_SUCCESS,
         ingredient: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_INGREDIENTSID_ERROR,
         error: error.response
       });
     });
  }
};

export const getGalleries = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_GALLERIES
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/galleries`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_GALLERIES_SUCCESS,
         galleries: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_GALLERIES_ERROR,
         error: error.response
       });
     });
  }
};