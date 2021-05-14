import React from 'react'
import { Text } from 'react-native'

const Item = ({ name, price, description }) => {
	return <>
		<Text>{ name }</Text>
		<Text>{ price }</Text>
		<Text>{ description }</Text>
	</>
}

export default Item