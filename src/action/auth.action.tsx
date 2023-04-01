import {UserModel} from "../shared/models/user.model";
import axios, {AxiosResponse} from "axios";
import {configures} from "../shared/configures";

export const login = (user: UserModel) => {
    const axiosPromise = axios.post(process.env.REACT_APP_HOST + configures.urlLogin, user);
    axiosPromise.then((res: AxiosResponse<UserModel>) => localStorage.setItem(configures.token, res.data.username));
    return {
        type: configures.LOGIN,
        payload: axiosPromise,
    }
};

export const logout = () => {
    localStorage.removeItem(configures.token);
    return {
        type: configures.LOGOUT,
    }
};

export const checkLogin = () => {
    const token = localStorage.getItem(configures.token);
    let checkLoginPromise = null;
    if (token) {
        checkLoginPromise = axios.get(process.env.REACT_APP_HOST + configures.urlCheckLogin,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
    }

    return {
        type: configures.CHECK_LOGIN,
        payload: checkLoginPromise,
    }
}