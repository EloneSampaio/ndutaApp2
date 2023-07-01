import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareHeaders} from '../../../store/middlewares/prepareHeaders';
import {ApplicationProperties} from '../../../application.properties';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: builder => ({
    registro: builder.mutation({
      query: formData => ({
        url: '/register',
        method: 'POST',
        body: formData,
      }),
    }),
    updateUserInfo: builder.mutation({
      query: ({id, ...formData}) => ({
        url: `/user/updateUserInfo/${id}`,
        method: 'PUT',
        body: formData,
      }),
    }),
    getUserData: builder.query({
      query: () => '/me',
    }),
    verificarNumeroTelefone: builder.query({
      query: phone => `/user/${phone}/exist`,
    }),
    sendOtp: builder.mutation({
      query: phone => ({
        url: '/user/send-otp',
        method: 'POST',
        body: {telefone: phone},
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({telefone, otp}) => ({
        url: '/user/verify-otp',
        method: 'POST',
        body: {telefone, otp},
      }),
    }),
    newPassword: builder.mutation({
      query: ({password, phone}) => ({
        url: `/new-password/${phone}`,
        method: 'POST',
        body: {password},
      }),
    }),
    getPagamentosById: builder.mutation({
      query: id => ({
        url: 'pagamentos/cliente/' + id,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useRegistroMutation,
  useUpdateUserInfoMutation,
  useGetUserDataQuery,
  useVerificarNumeroTelefoneQuery,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useNewPasswordMutation,
  useGetPagamentosByIdMutation,
} = userApi;
