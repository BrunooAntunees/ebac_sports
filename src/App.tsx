import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './store/api'
import type { Produto as ProdutoType } from './store/api'
import { adicionar, favoritar } from './store/cartSlice'
import type { RootState, AppDispatch } from './store'

export type { Produto } from './store/api'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  const { data: produtos = [], isLoading, error } = useGetProdutosQuery()

  const carrinho = useSelector((state: RootState) => state.cart.itens)
  const favoritos = useSelector((state: RootState) => state.cart.favoritos)

  const adicionarAoCarrinho = (produto: ProdutoType) => {
    const jaExiste = carrinho.some((item) => item.id === produto.id)

    if (jaExiste) {
      alert('Item já adicionado')
      return
    }

    dispatch(adicionar(produto))
  }

  const favoritarProduto = (produto: ProdutoType) => {
    dispatch(favoritar(produto))
  }

  if (isLoading) {
    return (
      <>
        <GlobalStyle />
        <p>Carregando produtos...</p>
      </>
    )
  }

  if (error) {
    return (
      <>
        <GlobalStyle />
        <p>Erro ao carregar os produtos.</p>
      </>
    )
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarProduto}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
