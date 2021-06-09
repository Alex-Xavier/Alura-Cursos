import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ProductList from '../screens/ProductList'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProductList'>
        <Stack.Screen
          name='Lista de Produtos'
          component={ProductList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes