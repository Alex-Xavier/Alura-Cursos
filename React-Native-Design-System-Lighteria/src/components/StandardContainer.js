import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

const StandardContainer = ({ children }) => {
  return (
    <>
      <SafeAreaView>
        <StatusBar />

        {children}
      </SafeAreaView>
    </>
  )
}

export default StandardContainer