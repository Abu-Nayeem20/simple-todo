import { combineReducers } from "redux";
import todoReducer from './Todos/reducer';
import filterReducer from "./Filters/reducer";


const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
});

export default rootReducer;