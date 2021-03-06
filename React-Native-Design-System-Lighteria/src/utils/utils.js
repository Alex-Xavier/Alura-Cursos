import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

const currencyFormat = value =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL'
  }).format(value)

export default currencyFormat