import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApplicationProperties} from '../../../application.properties';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: ApplicationProperties.baseUrl}),
  endpoints: builder => ({
    // Remova o endpoint 'authenticate' se não for utilizá-lo em outros locais do projeto
  }),
});

// Remova a linha abaixo se não for utilizar o 'useAuthenticateMutation' em outros locais do projeto
//export const {useAuthenticateMutation} = authApi;
