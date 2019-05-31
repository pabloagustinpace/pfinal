import { combineReducers } from "redux";
import recipes from "./recipes";
import recipeid from "./recipeid";
import chefs from "./chefs";
import ingredients from "./ingredients";
import galleries from "./galleries";

export default combineReducers({ recipes, recipeid, chefs, ingredients,galleries });
