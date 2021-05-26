import React from 'react'
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'

import { globalStyle } from '../styles'

const StandardContainer = ({ children }) => {
  return (
    <SafeAreaView style={globalStyle.fill}>
      <StatusBar />

			<KeyboardAvoidingView
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={globalStyle.fill}>
          {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default StandardContainer