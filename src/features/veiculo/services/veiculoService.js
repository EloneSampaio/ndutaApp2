import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareHeaders} from '../../../store/middlewares/prepareHeaders';
import {ApplicationProperties} from '../../../application.properties';

export const veiculoApi = createApi({
  reducerPath: 'veiculoApi',
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
    getUserData: builder.query({
      query: () => '/veiculos',
    }),
  }),
});

export const {useRegistroMutation, useGetVeiculosDataQuery} = veiculoApi;
