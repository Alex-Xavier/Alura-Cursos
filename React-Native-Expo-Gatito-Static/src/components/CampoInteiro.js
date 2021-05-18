import React from 'react'
import { TextInput } from 'react-native'

const CampoInteiro = ({ value, action }) => {
  const update = ( newValue, callback ) => {
    const verifyInteger = newValue.match(/^[0-9]*$/)
    if (!verifyInteger) return

    const removeLeftZero = newValue.replace(/^(0)(.+)/, '$2')

    callback(removeLeftZero)
  }

  const numberToString = String(value)
  
  return (
    <TextInput 
      keyboardType='number-pad'
      selectTextOnFocus
      onChangeText={(newValue) => update(newValue, action)}
      value={numberToString} />
  )
}

export default CampoInteiro