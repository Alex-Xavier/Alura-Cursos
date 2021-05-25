import React from 'react'
import { FlatList } from 'react-native'

import { ListItems, ServicesItem } from '../components'

const servicos = [
	{
		id: 1,
		name: 'Banho',
		price: 79.9,
		description: 'Não dê banho no seu gato! Mas se precisar nós damos!'
	},
	{
		id: 2,
		name: 'Vacina V4',
		price: 89.9,
		description: 'Uma dose da vacina V4. Seu gato precisa de duas.'
	},
	{
		id: 3,
		name: 'Vacina Antirrábica',
		price: 99.9,
		description: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.'
	}
]

const ServicesScreen = () => {
	return (
		<ListItems>
			<FlatList 
				data={servicos}
				renderItem={({ item }) => <ServicesItem {...item} />}
				keyExtractor={({ id }) => String(id)} />
		</ListItems>
	)
}

export default ServicesScreen