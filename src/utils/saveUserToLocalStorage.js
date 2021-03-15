function saveUserToLocalStorage(user) {
    let locallyCreatedUsers = JSON.parse(localStorage.getItem('createdUsersList'));

    if (!locallyCreatedUsers) {
        locallyCreatedUsers = [];
    }

    locallyCreatedUsers.push(user);
    const newLocallyCreatedUsers = JSON.stringify(locallyCreatedUsers);

    localStorage.setItem('createdUsersList', newLocallyCreatedUsers);
}

export default saveUserToLocalStorage;