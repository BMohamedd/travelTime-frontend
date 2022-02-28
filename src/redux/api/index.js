import axios from 'axios';

const url = "https://travel-time-backend.herokuapp.com";

export const login = (userdata) => axios.post(`${url}/login`, userdata);
export const register = (userdata) => axios.post(`${url}/register`, userdata);
export const CreatePost = (newPost, config) => axios.post(`${url}/create-a-new-post`, newPost, config);
export const deletePostRequest = (id, config) => axios.delete(`${url}/delete-post/${id}`, config);
export const editCurrentPost = (newPost, config) => axios.put(`${url}/edit-post`, newPost, config);
export const CheckTokenRequest = (config) => axios.get(`${url}/does-user-exist`,config);
export const getPostes = (config) => axios.get(`${url}/my-postes`,config);
export const requestPersonalInfo = (config) => axios.get(`${url}/get-my-personal-info`,config);
export const editPersonalInfo = (body , config) => axios.post(`${url}/edit-my-personal-information`, body, config);
export const likePost = (id, config) => axios.get(`${url}/like/${id}`, config);
