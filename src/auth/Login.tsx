import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {configures} from "../shared/configures";
import {UserModel} from "../shared/models/user.model";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../action/auth.action";
import {ReduxStateModel} from "../shared/models/redux-state.model";
import {RouteComponentProps} from "react-router-dom";


const loginSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

export const Login = (props: LoginProps ) => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const dispatch = useDispatch();
    const userFromRedux = useSelector((state: ReduxStateModel) => state.user);

    useEffect(() => {
        if (userFromRedux) {
            props.history.push(configures.tableRoute);
        }
    }, [props, userFromRedux]);

    const loginHandler = (updateUser: UserModel) => {
        console.log(updateUser);
        setUser({
            ...user,
            ...updateUser,
        });
        dispatch(login(updateUser));
    };

    return (
        <Formik  onSubmit={loginHandler} validationSchema={loginSchema} initialValues={{username: '', password: ''}}>
            {() => {
                return (
                    <Form>
                        {configures.LOGIN_FIELDS.map(item => (
                            <Field
                                key={item.name}
                                name={item.name}
                                type={item.type}
                                as='input'>
                            </Field>
                        ))}
                        <button type='submit'>submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
};

interface LoginProps extends RouteComponentProps{

}