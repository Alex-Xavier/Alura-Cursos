import React from 'react'
import { FlatList } from 'react-native'

import { ListItems, ShoppingCartItem, ShoppingCartStatus } from '../components'

const servicos = [
	{
		id: 1,
		name: 'Banho',
		price: 79.9,
		description: 'Não dê banho no seu gato! Mas se precisar nós damos!',
		quantity: 1
	},
	{
		id: 2,
		name: 'Vacina V4',
		price: 89.9,
		description: 'Uma dose da vacina V4. Seu gato precisa de duas.',
		quantity: 2
	},
	{
		id: 3,
		name: 'Vacina Antirrábica',
		price: 99.9,
		description: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.',
		quantity: 3
	}
]

const ShoppingCartScreen = () => {
	return (
		<ListItems>
			<ShoppingCartStatus total={0} />

			<FlatList 
				data={servicos}
				renderItem={({ item }) => <ShoppingCartItem {...item} />}
				keyExtractor={({ id }) => String(id)} />
		</ListItems>
	)
}

export default ShoppingCartScreen