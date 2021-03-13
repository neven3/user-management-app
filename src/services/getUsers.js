const usersUrl = 'https://reqres.in/api/users?per_page=100';

async function getUsers() {
    const response = await fetch(usersUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });

    const data = await response.json();

    if (response.status >= 400) {
        throw data;
    } else {
        return data.data;
    }
}

export default getUsers;