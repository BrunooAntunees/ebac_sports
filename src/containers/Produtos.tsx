import type { Produto as ProdutoType } from '../store/api'
import Produto from '../components/Produto'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((favorito) => favorito.id === produto.id)
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          favoritar={favoritar}
          aoComprar={adicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
