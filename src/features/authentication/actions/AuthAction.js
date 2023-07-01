import {createAction} from '@reduxjs/toolkit';

export const authRequest = createAction('auth/authRequest');
export const setToken = createAction('auth/setToken');
export const authLogout = createAction('auth/Logout');
