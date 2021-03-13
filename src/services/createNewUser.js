const createNewUserUrl = 'https://reqres.in/api/users';

async function createNewUser(body) {
    const response = await fetch(createNewUserUrl, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    });

    const data = await response.json();

    if (response.status >= 400) {
        throw data;
    } else {
        return data;
    }
}

export default createNewUser;