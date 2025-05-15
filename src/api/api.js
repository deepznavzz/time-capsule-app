import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001/api' });

// Add token to requests if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const signup = (formData) => API.post('/auth/signup', formData);
export const signin = (formData) => API.post('/auth/signin', formData);
export const createCapsule = (capsuleData) => API.post('/capsules', capsuleData);
export const getCapsules = (userId) => API.get(`/capsules/${userId}`);
export const deleteCapsule = (id) => API.delete(`/capsules/${id}`);