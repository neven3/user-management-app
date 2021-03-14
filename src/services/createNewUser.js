const createNewUserUrl = 'https://reqres.in/api/users';
const defaultImageUrl = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/530790_116956241792417_1239022532_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=iW3xye82GuIAX-02m-z&_nc_ht=scontent-vie1-1.xx&oh=46dd6c1b6910a730025b8a6eea77e15f&oe=6073C295';

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