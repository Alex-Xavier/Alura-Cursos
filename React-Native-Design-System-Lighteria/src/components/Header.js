import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ShoppingBag from './ShoppingBag'

const Header = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LIGHTERIA</Text>

        <ShoppingBag />
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.spacer} />

        <View style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionText}>Categorias</Text>
        </View>   
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    paddingHorizontal: 10
  },
  spacer: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA'
  },
  descriptionTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46
  },
  descriptionText: {
    padding: 34,
    backgroundColor: '#F4F0F4',
    fontSize: 16,
    color: '#A1A5AA'
  }
})

export default Header