import { defaultImageUrl } from '../Constants';

const createNewUserUrl = 'https://reqres.in/api/users';

async function createNewUser(body) {
    const bodyCopy = { ...body };

    if (!bodyCopy.avatar) {
        bodyCopy.avatar = defaultImageUrl;
    }

    const response = await fetch(createNewUserUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyCopy)
    });

    const data = await response.json();

    if (response.status >= 400) {
        throw data;
    } else {
        return data;
    }
}

export default createNewUser;