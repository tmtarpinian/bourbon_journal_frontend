import { combineReducers } from "redux";
import bourbonReducer from './bourbonReducer'
import categoryReducer from './categoryReducer'

 
const indexReducer = combineReducers({
  bourbons: bourbonReducer,
  categories: categoryReducer
});
 
export default indexReducer;