import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLogInUserMutation } from '../redux/user/userApiSlice';
import { logIn } from '../redux/user/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [logInUser, { isLoading }] = useLogInUserMutation();

    useEffect(() => {
        (async function login() {
            const user = {
                "email": "p_a_m@i.ua",
                "password": "12344321"
            }
            try {
                const { data, error } = await logInUser(user);
                if (!data) return console.log(error)

                dispatch(logIn(data));
                console.log('login successfully')
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return (
        (!isLoading && (<div>Login</div>))
    )
}

export default Login