import { combineReducers } from "redux";
import bourbonReducer from './bourbonReducer'
 
const indexReducer = combineReducers({
  bourbons: bourbonReducer
});
 
export default indexReducer;