import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({ value, action }) => {
  return (
    <TouchableOpacity OnPress={action}>
      <Text>{ value }</Text>
    </TouchableOpacity>
  )
}

export default Button