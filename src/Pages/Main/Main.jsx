import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';

import CreateNewUserForm from '../../components/CreateNewUserForm';
import getUsers from '../../services/getUsers';
import createNewUser from '../../services/createNewUser';

function MainPage(props) {
    const START_SEARCH_FROM = 2;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchBarValue, setSearchBarValue] = useState('');
    const [userList, setUserList] = useState([]);
    const usersListRef = useRef(null);

    useEffect(() => {
        async function fetchUsers() {

            try {
                const users = await getUsers();
                usersListRef.current = users;
                setUserList(users);
            } catch (err) {
                // put toast here
                console.log({ err });
                debugger
            }
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        if (usersListRef.current?.length > 0) {
            if (searchBarValue.length >= START_SEARCH_FROM) {
                const filteredUserList = [...usersListRef.current].filter(user => {
                    return (
                        user.first_name.toLowerCase().includes(searchBarValue.toLowerCase())
                        || user.last_name.toLowerCase().includes(searchBarValue.toLowerCase())
                        || `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchBarValue.toLowerCase())
                    );
                });

                setUserList(filteredUserList);
            } else {
                setUserList(usersListRef.current);
            }
        }
    }, [searchBarValue])

    Modal.setAppElement('#root');

    return (
        <div className="screen-container">
            <main>
                <div className="content-container">
                    <input
                        onChange={(e) => setSearchBarValue(e.target.value)}
                        type="search"
                        name="search"
                        id="search"
                        value={searchBarValue}
                    />
                    <button onClick={() => setIsModalOpen(true)}>+ Add new user</button>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={() => setIsModalOpen(false)}
                    >
                        <CreateNewUserForm onSubmit={async (values) => {
                            try {
                                const user = await createNewUser(values);
                                const { first_name, last_name, email, avatar, id } = user;
                                const newUser = {
                                    first_name,
                                    last_name,
                                    email,
                                    avatar,
                                    id
                                };

                                setUserList([...userList, newUser]);
                                setIsModalOpen(false);
                            } catch (err) {
                                console.log({ err })
                                debugger
                            }
                        }} />
                    </Modal>
                </div>
                <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"
                }}>
                    {
                        userList.length > 0
                            ? userList.map(user => {
                                return (
                                    <div key={user.id} className="card">
                                        <div className="card-image">
                                            <img src={user.avatar} alt="user" />
                                        </div>
                                        <div className="card-details">
                                            <p>{user.first_name}</p>
                                            <p>{user.last_name}</p>
                                        </div>
                                    </div>
                                );
                            })
                            : <div>No users</div>
                    }
                </div>
            </main>
        </div >
    );
}

export default MainPage;