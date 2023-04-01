import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {configures} from "./shared/configures";
import BooksTable from "./books-table/BooksTable";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/root.reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from "./books-table/add-book/AddBook";
import UpdateBook from "./books-table/update-book/UpdateBook";
import promise from "redux-promise";
import {Login} from "./auth/Login";
import {withGuard} from "./shared/HOCs/withGuard";

const root = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path={configures.tableRoute} component={BooksTable}/>
                    <Route path={configures.addBookRoute} component={withGuard(AddBook)}/>
                    <Route path={`${configures.updateBookRoute}/:id`} component={withGuard(UpdateBook)}/>
                    <Route path={configures.loginRoute} component={Login}/>
                    {/* default path */}
                    <Redirect to={configures.loginRoute}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    , root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
