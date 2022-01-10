import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'https://localhost:5000';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/users/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/users/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/users/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/users/${id}`, user)
}