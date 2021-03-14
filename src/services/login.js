const url = 'https://reqres.in/api/login';

async function login(credentials) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    const data = await response.json();

    if (response.status >= 400) {
        throw data.error;
    } else {
        return data.token;
    }
}

export default login;