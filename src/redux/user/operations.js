import { createAsyncThunk } from '@reduxjs/toolkit';

import authService from '../../services/auth';
import { setAuthToken } from '../../services/axios.config';

export const register = createAsyncThunk(
  'user/register',
  async (userCredentials, thunkApi) => {
    try {
      await authService.register(userCredentials);

      const {
        data: {
          data: { accsessToken },
        },
      } = await authService.login(userCredentials);
      setAuthToken(accsessToken);

      const {
        data: { data: userData },
      } = await authService.getUser(accsessToken);

      return { user: userData, accessToken: accsessToken };
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async (userCredentials, thunkApi) => {
    try {
      const {
        data: {
          data: { accsessToken },
        },
      } = await authService.login(userCredentials);

      setAuthToken(accsessToken);

      const {
        data: { data },
      } = await authService.getUser(accsessToken);

      return { user: data, accessToken: accsessToken };
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  },
);

export const logout = createAsyncThunk('user/logout', async (_, thunkApi) => {
  try {
    await authService.logout();
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const updateUser = createAsyncThunk(
  'user/update',
  async (fieldsToUpdate, thunkApi) => {
    try {
      const { data } = await authService.update(fieldsToUpdate);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  },
);

export const refresh = createAsyncThunk('user/refresh', async (_, thunkApi) => {
  try {
    const {
      auth: { token },
    } = thunkApi.getState();

    if (token) setAuthToken(token);

    const {
      data: {
        data: { accessToken },
      },
    } = await authService.refresh();

    return accessToken;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (file, thunkApi) => {
    const {
      auth: { token },
    } = thunkApi.getState();

    if (token) setAuthToken(token);

    try {
      const {
        data: {
          data: { avatar },
        },
      } = await authService.uploadAvatar(file);
      return avatar;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  },
);
