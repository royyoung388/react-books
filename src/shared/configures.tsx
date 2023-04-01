import {number} from "yup";

export const configures = {
    // nav route
    tableRoute: '/table',
    addBookRoute: '/add',
    updateBookRoute: '/update',
    loginRoute: '/login',

    // action type
    GET_BOOKS: 'GET_BOOKS',
    ADD_BOOK: 'ADD_BOOK',
    UPDATE_BOOK: 'UPDATE_BOOK',
    UPDATE_BOOK_BY_ID: 'UPDATE_BOOK_BY_ID',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CHECK_LOGIN: 'CHECK_LOGIN',

    // http url
    urlBooks: '/books',
    urlLogin: '/auth/login',
    urlLogout: '/auth/logout',
    urlCheckLogin: '/auth/checklogin',

    // auth
    token: 'username',

    // edit book form fields
    EDIT_BOOK_FIELDS: [{
        name: 'name',
        type: 'text',
        label: 'Name',
    }, {
        name: 'price',
        type: 'number',
        label: 'Price',
    }, {
        name: 'author',
        type: 'text',
        label: 'Author',
    }],

    LOGIN_FIELDS: [{
        name: 'username',
        type: 'text',
        label: 'Username',
    }, {
        name: 'password',
        type: 'password',
        label: 'Password',
    }]
}