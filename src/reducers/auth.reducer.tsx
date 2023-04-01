import {UserModel} from "../shared/models/user.model";
import {Action} from "redux";
import {configures} from "../shared/configures";
import {AxiosResponse} from "axios";

export const authReducer = (user: UserModel | null = null, action: UserAction) => {
    switch (action.type) {
        case configures.LOGIN:
            const userRes = action.payload;
            return userRes?.data;
        case configures.LOGOUT:
            return null;
        case configures.CHECK_LOGIN:
            return action.payload?.data;
    }
    return user;
}

interface UserAction extends Action {
    payload: AxiosResponse<UserModel>;
}