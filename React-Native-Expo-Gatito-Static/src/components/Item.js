import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

import { itemStyle } from '../styles'
import CampoInteiro from './CampoInteiro'

const Item = ({ name, price, description }) => {
	const [ quantity, setQuantity ] = useState(1)

	return (
		<View>
			<View style={itemStyle.information}>
				<Text style={itemStyle.name}>{ name }</Text>
				<Text style={itemStyle.description}>{ description }</Text>
				<Text style={itemStyle.price}>{ price }</Text>
			</View>

			<View style={itemStyle.shoppingCart}>
				<View>
					<View style={itemStyle.value}>
						<Text style={itemStyle.description}>Quantidade:</Text>
						<CampoInteiro value={quantity} style={itemStyle.quantity} action={setQuantity} />
					</View>

					<View style={itemStyle.value}>
						<Text style={itemStyle.description}>Preço:</Text>
						<Text style={itemStyle.price}>0</Text>
					</View>
				</View>

				<Button title='Adicionar' />
			</View>

			<View style={itemStyle.divisor} />
		</View>
	)
}

export default Item