import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ServicesScreen, ShoppingCartScreen } from '../screens'

import { colors } from '../styles'

const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.purple,
          inactiveTintColor: colors.white,
          activeBackgroundColor: colors.purple,
          inactiveBackgroundColor: colors.orange,
          style: {
            height: 70
          },
          labelStyle: {
            width: '100%',
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: colors.orange
          }
        }}>
        <Tab.Screen name='Serviços' component={ServicesScreen} />
        <Tab.Screen name='Carrinho' component={ShoppingCartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes