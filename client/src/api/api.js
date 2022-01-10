import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`/users/${id}`);
}

export const addUser = async (user) => {
    return await axios.post('/users/add', user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`/users/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`/users/${id}`, user)
}