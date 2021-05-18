import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { functionButtonStyle as functionStyle } from '../styles'

const Button = ({ small = false, inverse = false, value, action, style }) => {
  const standardStyle = functionStyle(small, inverse)

  return (
    <TouchableOpacity OnPress={action} style={[standardStyle.button, style]}>
      <Text style={standardStyle.value}>{ value }</Text>
    </TouchableOpacity>
  )
}

export default Button