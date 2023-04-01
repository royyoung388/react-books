import {NavLink} from "react-router-dom";
import {configures} from "../shared/configures";
import {logout} from "../action/auth.action";
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateModel} from "../shared/models/redux-state.model";


export const Header = () => {
    const userFromRedux = useSelector((store: ReduxStateModel) => store.user);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <span className="navbar-brand">React Books</span>
                <ul className="navbar-nav nav">
                    <li className="nav-item">
                        <NavLink to={configures.tableRoute} className="nav-link">Table</NavLink>
                    </li>
                    <li className="navbar-nav nav">
                        <NavLink to={configures.addBookRoute} className="nav-link">Add Book</NavLink>
                    </li>
                    <li className="navbar-nav nav">
                        <NavLink to={configures.updateBookRoute} className="nav-link">Update Book</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav nav ms-auto">
                    {userFromRedux ?
                        <NavLink onClick={logoutHandler} to={configures.loginRoute}
                                 className="nav-link">Welcome {userFromRedux.username}, logout</NavLink> :
                        <NavLink to={configures.loginRoute} className="nav-link">Login</NavLink>}
                </ul>
            </nav>
        </header>
    )
}