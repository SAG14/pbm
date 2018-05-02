import { REGISTER_USER, LOGIN_USER } from './types';

export const signIn = (credentialData) => dispatch => {
    console.log("hits signin");
    console.log(credentialData);
    fetch('http://localhost:3100/api/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentialData)
        })
        .then(res => res.json())
        .then(json => 
            dispatch ({
                type: LOGIN_USER,
                payload: json
            })
        );
}