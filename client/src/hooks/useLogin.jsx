import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import baseUrl from '../api/baseUrl';


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(baseUrl + '/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
            setIsLoading(false);
            return;
        } else {
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            //set the user in the auth context
            dispatch({
                type: 'LOGIN',
                payload: json
            });

            setIsLoading(false);
        }
    };

    return { login, error, isLoading }
};