import {BookModel} from "../shared/models/book.model";
import {configures} from "../shared/configures";
import axios from "axios";

export const getBooks = () => {
    const axiosPromise = axios.get(process.env.REACT_APP_HOST + configures.urlBooks);
    return {
        type: configures.GET_BOOKS,
        payload: axiosPromise,
    }
}

export const addBook = (book: BookModel, successCallback: () => void) => {
    const axiosPromise = axios.post(process.env.REACT_APP_HOST + configures.urlBooks, book);
    axiosPromise.then(successCallback);
    return {
        type: configures.ADD_BOOK,
        payload: axiosPromise,
    }
}

export const updateBookById = (id: number) => {
    return {
        type: configures.UPDATE_BOOK_BY_ID,
        payload: id,
    }
}

export const updateBook = (book: BookModel) => {
    const axiosPromise = axios.put(process.env.REACT_APP_HOST + configures.urlBooks + `/${book.id}`, book)
    return {
        type: configures.UPDATE_BOOK,
        payload: axiosPromise,
    }
}