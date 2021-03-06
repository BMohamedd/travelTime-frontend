import axios from "axios";

const url = "https://trave-time-back-end.herokuapp.com";

export const login = (userdata) => axios.post(`${url}/login`, userdata);
export const register = (userdata) => axios.post(`${url}/register`, userdata);
export const CreatePost = (newPost, config) =>
  axios.post(`${url}/create-a-new-post`, newPost, config);
export const deletePostRequest = (id, config) =>
  axios.delete(`${url}/delete-post/${id}`, config);
export const editCurrentPost = (newPost, config) =>
  axios.put(`${url}/edit-post`, newPost, config);
export const CheckTokenRequest = (config) =>
  axios.get(`${url}/does-user-exist`, config);
export const getPostes = (config) => axios.get(`${url}/my-postes`, config);
export const requestPersonalInfo = (config) =>
  axios.get(`${url}/get-my-personal-info`, config);
export const editPersonalInfo = (body, config) =>
  axios.post(`${url}/edit-my-personal-information`, body, config);
export const likePost = (id, userId, config) =>
  axios.get(`${url}/like/${id}/${userId ? userId : "123"}`, config);
export const getBrowsePostes = (config) =>
  axios.get(`${url}/request-postes`, config);
export const getMorePostes = (config, repatedPostes) =>
  axios.post(`${url}/request-postes`, repatedPostes, config);
export const savePostApi = (Information, config) =>
  axios.post(`${url}/save-post`, Information, config);
export const getSavedPostes = (config) =>
  axios.get(`${url}/get-save-post`, config);
