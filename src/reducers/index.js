import { combineReducers } from "redux";
import bourbonReducer from './bourbonReducer'
import categoriesReducer from './categoriesReducer'

 
const indexReducer = combineReducers({
  bourbons: bourbonReducer,
  categories: categoriesReducer
});
 
export default indexReducer;