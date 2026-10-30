import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from './api'

type CartState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CartState = {
  itens: [],
  favoritos: []
}

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const jaExiste = state.itens.some((p) => p.id === produto.id)

      if (!jaExiste) {
        state.itens.push(produto)
      }
    },

    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    },

    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const index = state.favoritos.findIndex((p) => p.id === produto.id)

      if (index >= 0) {
        state.favoritos.splice(index, 1)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionar, remover, favoritar } = cartSlice.actions

export default cartSlice.reducer
