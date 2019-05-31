import { combineReducers } from "redux";
import recipes from "./recipes";
import recipeid from "./recipeid";
import chefs from "./chefs";
import ingredients from "./ingredients";
import galleries from "./galleries";
import ingredientsid from "./ingredientsid";

export default combineReducers({ recipes, recipeid, chefs, ingredients,galleries,ingredientsid });
