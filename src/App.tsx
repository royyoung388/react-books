import React, {Component, ReactNode} from 'react';
import './App.css';
import {Header} from "./header/Header";
import {connect} from "react-redux";
import {checkLogin} from "./action/auth.action";
import {AxiosResponse} from "axios";

class App extends Component<AppProps, any> {

    componentDidMount() {
        this.props.checkLogin();
    }

    render() {
        return (
            <>
                <Header></Header>
                <main>
                    {this.props.children}
                </main>
            </>
        );
    };
}

interface AppProps {
    checkLogin: () => { type: string, payload: Promise<AxiosResponse> | null };
    children?: ReactNode;
}

export default connect(null, {checkLogin})(App);
