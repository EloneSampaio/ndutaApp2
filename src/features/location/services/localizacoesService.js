import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareHeaders} from '../../../store/middlewares/prepareHeaders';
import {ApplicationProperties} from '../../../application.properties';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: builder => ({
    getLocationAll: builder.query({
      query: () => '/localizacoes',
    }),
  }),
});

export const {useGetLocationAllQuery} = locationApi;
