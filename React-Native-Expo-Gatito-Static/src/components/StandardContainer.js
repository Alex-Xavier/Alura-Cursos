import React from 'react'
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'

import { globalStyle, colors } from '../styles'

const StandardContainer = ({ children }) => {
  return (
    <>
      <SafeAreaView style={globalStyle.adjustScreenUp}>
        <StatusBar backgroundColor={colors.purple} />

		  	<KeyboardAvoidingView
		  		behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
		  		style={globalStyle.fill}>
            {children}
        </KeyboardAvoidingView>
      </SafeAreaView>

      <SafeAreaView style={globalStyle.adjustScreenLow} />
    </>
  )
}

export default StandardContainer