import React from 'react'
import { TextInput } from 'react-native'

const CampoInteiro = ({ value, action }) => {
  const numberToString = String(value)
  
  return (
    <TextInput 
      keyboardType='number-pad'
      selectTextOnFocus
      onChangeText={(newValue) => action(newValue)}
      value={numberToString} />
  )
}

export default CampoInteiro