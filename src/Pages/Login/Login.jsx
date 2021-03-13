import React from 'react';

import LoginForm from '../../components/LoginForm';

function LoginPage() {
    return (
        <div className="screen-container">
            <main>
                <div className="content-container">
                    <h2>Login</h2>
                    <LoginForm onSubmit={handleLoginSubmit} />
                </div>
            </main>
        </div>
    );
}

async function handleLoginSubmit({ email, password }) {
    const url = 'https://reqres.in/api/login';

    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.status >= 400) {
            throw data.error;
        }
    } catch (err) {
        // put error toast here
        console.log({ err })
        debugger
    }
}

export default LoginPage;