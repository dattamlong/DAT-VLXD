import axiosClient from './axiosClient';

const authApi = {
  register: async ({ fullname, password, phone, email }) => {
    try {
      const endPoint = '/register';
      const formData = new FormData();

      formData.append('fullname', fullname);
      formData.append('password', password);
      formData.append('phone', phone);
      formData.append('email', email);

      const { success } = await axiosClient.post(endPoint, formData);

      if (success) {
        return { success };
      }
      throw new Error();
    } catch (error) {
      return { success: false };
    }
  },
  login: async ({ phone, password }) => {
    try {
      const endPoint = '/login';
      const formData = new FormData();

      formData.append('phone', phone);
      formData.append('password', password);

      const { success, token, user } = await axiosClient.post(
        endPoint,
        formData
      );
      if (success) {
        return { success, token, user };
      }
      throw new Error();
    } catch (error) {
      return { success: false };
    }
  },
  logout: async ({ accessToken }) => {
    try {
      const endPoint = '/logout';
      const params = { token: accessToken };

      await axiosClient.post(endPoint, params);
    } catch (error) {
      return error;
    }
  },
};

export default authApi;
