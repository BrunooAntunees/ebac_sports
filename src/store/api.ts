import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),

  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => ''
    })
  })
})

export const { useGetProdutosQuery } = api
