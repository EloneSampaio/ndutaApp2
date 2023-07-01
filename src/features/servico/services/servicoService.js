import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareHeaders} from '../../../store/middlewares/prepareHeaders';
import {ApplicationProperties} from '../../../application.properties';

export const servicosApi = createApi({
  reducerPath: 'servicosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: builder => ({
    addSolicitacao: builder.mutation({
      query: servico => ({
        url: '/solicitacoes/add',
        method: 'POST',
        body: servico,
      }),
    }),
    getSolicitacoesAll: builder.query({
      query: () => '/motoristas/solicitacoes/disponiveis',
    }),
    getServicosAll: builder.query({
      query: () => '/servicos',
    }),
    getCategoriasAll: builder.query({
      query: () => '/categoria-servico',
    }),
    getTipoVeiculosAll: builder.query({
      query: () => '/tipos-veiculo',
    }),
    getPreco: builder.mutation({
      query: dados => ({
        url: '/calculate-price-cliente',
        method: 'POST',
        body: dados,
      }),
    }),

    getTarifasAll: builder.query({
      query: () => '/tarifas',
    }),
  }),
});

export const {
  useAddSolicitacaoMutation,
  useGetSolicitacoesAllQuery,
  useGetServicosAllQuery,
  useGetCategoriasAllQuery,
  useGetTipoVeiculosAllQuery,
  useGetPrecoMutation,
  useGetTarifasAllQuery,
} = servicosApi;
