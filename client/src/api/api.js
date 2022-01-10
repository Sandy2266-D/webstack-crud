import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`/${id}`, user)
}