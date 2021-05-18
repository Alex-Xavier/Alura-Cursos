import React from 'react'
import { TextInput } from 'react-native'

import { fieldStyle as standardStyle } from '../styles'

const IntegerField = ({ value, style, action }) => {
  const update = ( newValue, callback ) => {
    const verifyInteger = newValue.match(/^[0-9]*$/)
    if (!verifyInteger) return

    const removeLeftZero = newValue.replace(/^(0)(.+)/, '$2')

    callback(removeLeftZero)
  }

  const numberToString = String(value)
  
  return (
    <TextInput
      style={[standardStyle.field, style]}
      keyboardType='number-pad'
      selectTextOnFocus
      onChangeText={(newValue) => update(newValue, action)}
      value={numberToString} />
  )
}

export default IntegerField