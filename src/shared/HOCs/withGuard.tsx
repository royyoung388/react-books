import {useSelector} from "react-redux";
import {ReduxStateModel} from "../models/redux-state.model";
import {useEffect} from "react";
import {configures} from "../configures";
import {RouteComponentProps} from "react-router-dom";


export const withGuard = (OldComponent: any) => {
    const HOC = (props: RouteComponentProps) => {
        const userFromRedux = useSelector((reduxState: ReduxStateModel) => reduxState.user);

        useEffect(() => {
            !userFromRedux && props.history.push(configures.loginRoute);
        }, [props, userFromRedux])

        return (
            userFromRedux ?
                <OldComponent {...props}/> :
                <h1>Loading...</h1>
        )
    }

    return HOC;
}