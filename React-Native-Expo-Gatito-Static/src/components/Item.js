import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { itemStyle } from '../styles'

const Item = ({ name, price, description }) => {
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
						<TextInput value='0'/>
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