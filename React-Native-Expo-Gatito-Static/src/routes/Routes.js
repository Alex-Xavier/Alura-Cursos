import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ServicesScreen, ShoppingCartScreen } from '../screens'

const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Serviços' component={ServicesScreen} />
        <Tab.Screen name='Carrinho' component={ShoppingCartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes