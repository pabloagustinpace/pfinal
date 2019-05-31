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