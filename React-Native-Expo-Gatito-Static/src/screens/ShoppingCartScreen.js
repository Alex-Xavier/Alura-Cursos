import React from 'react'
import { FlatList } from 'react-native'

import { StandardContainer, ShoppingCartItem, ShoppingCartStatus } from '../components'

const services = [
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
	const total = services.reduce((sum, {price, quantity}) => sum + (price * quantity), 0)
	
	return (
		<StandardContainer>
			<ShoppingCartStatus total={total} />

			<FlatList 
				data={services}
				renderItem={({ item }) => <ShoppingCartItem {...item} />}
				keyExtractor={({ id }) => String(id)} />
		</StandardContainer>
	)
}

export default ShoppingCartScreen