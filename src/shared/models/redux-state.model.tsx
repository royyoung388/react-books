import {BookModel} from "./book.model";
import {UserModel} from "./user.model";

export interface ReduxStateModel {
    books: BookModel[];
    user: UserModel;
}