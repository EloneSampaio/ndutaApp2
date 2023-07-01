import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareHeaders} from '../../../store/middlewares/prepareHeaders';
import {ApplicationProperties} from '../../../application.properties';

export const motoristaApi = createApi({
  reducerPath: 'motoristaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: builder => ({
    getMotoristaById: builder.query({
      query: id => `/motoristas/${id}/veiculos/`,
    }),
  }),
});

export const {useGetMotoristaByIdQuery} = motoristaApi;
