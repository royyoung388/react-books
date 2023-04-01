import {booksTableReducer} from "./booksTable.reducer";
import {combineReducers} from "redux";
import {authReducer} from "./auth.reducer";

export const rootReducer = combineReducers({
    books: booksTableReducer,
    user: authReducer,
});