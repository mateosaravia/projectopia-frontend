import axiosClient from '../../common/utils/axios-client';

export const postLogin = async (email: string, username: string, password: string) => {
  return await axiosClient
    .post(
      '/login',
      JSON.stringify({
        email,
        username,
        password,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    .catch((error) => {
      return error;
    });
};

export const postLogut = async () => {
  const token = '';
  return await axiosClient.post('logout', {}, { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
    return error;
  });
};
