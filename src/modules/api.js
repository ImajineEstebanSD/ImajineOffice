import axios from 'axios';

export const signUp = async (values) => {
  return await axios({
    method: 'POST',
    url: 'http://localhost:8080/api/auth/sign-up',
    data: values,
  });
};

export const signIn = async (values) => {
  console.log('entre al axios');
  return await axios({
    method: 'POST',
    url: 'http://localhost:8080/api/auth/sign-in',
    data: values,
  });
};

export const getProfile = async (token) => {
  return await axios({
    method: 'GET',
    url: 'http://localhost:8080/api/auth/me',
    headers: { jwt: token },
  });
};
