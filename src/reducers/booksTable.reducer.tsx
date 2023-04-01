import {BookModel} from "../shared/models/book.model";
import {Action} from "redux";
import {configures} from "../shared/configures";
import {AxiosResponse} from "axios";

export const booksTableReducer = (state: BookModel[] = [], action: AddBookAction | GetBooksAction | ModifyBookAction) => {
    switch (action.type) {
        case configures.ADD_BOOK:
            let addRes = (action as ModifyBookAction).payload;
            if (addRes.status === 200)
                return [...state, addRes.data];
            break;
        case configures.GET_BOOKS:
            let getRes = (action as GetBooksAction).payload;
            if (getRes.status === 200)
                return getRes.data;
            break;
        case configures.UPDATE_BOOK:
            let updateRes = (action as ModifyBookAction).payload;
            let index = state.findIndex(item => item.id === updateRes.data.id);
            index >= 0 && (state[index] = updateRes.data);
            break;
    }
    return state;
}

interface AddBookAction extends Action {
    payload: BookModel;
}

interface GetBooksAction extends Action {
    payload: AxiosResponse<BookModel[]>;
}

interface ModifyBookAction extends Action {
    payload: AxiosResponse<BookModel>;
}