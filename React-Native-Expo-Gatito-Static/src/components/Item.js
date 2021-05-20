import React, { useState } from 'react'
import { View, Text } from 'react-native'

import IntegerField from './IntegerField'
import Button from './Button'

import { itemStyle } from '../styles'

const Item = ({ name, price, description }) => {
	const [ quantity, setQuantity ] = useState(1)
	const [ total, setTotal ] = useState(price)

	const updateQuantityTotal = newQuantity => {
		setQuantity(newQuantity)
		computeTotal(newQuantity)
	}

	const computeTotal = quantity => {
		setTotal(quantity * price)
	}

	return (
		<View>
			<View style={itemStyle.information}>
				<Text style={itemStyle.name}>{ name }</Text>
				<Text style={itemStyle.description}>{ description }</Text>
				<Text style={itemStyle.price}>{
					Intl.NumberFormat('pt-BR', {
						style: 'currency', currency: 'BRL'
					}).format(price)
				}</Text>
			</View>

			<View style={itemStyle.shoppingCart}>
				<View>
					<View style={itemStyle.value}>
						<Text style={itemStyle.description}>Quantidade:</Text>
						<IntegerField value={quantity} style={itemStyle.quantity} action={updateQuantityTotal} />
					</View>

					<View style={itemStyle.value}>
						<Text style={itemStyle.description}>Total:</Text>
						<Text style={itemStyle.price}>{
							Intl.NumberFormat('pt-BR', {
								style: 'currency', currency: 'BRL'
							}).format(total)
						}</Text>
					</View>
				</View>

				<Button value='Adicionar' action={() => {}} />
			</View>

			<View style={itemStyle.divisor} />
		</View>
	)
}

export default Item