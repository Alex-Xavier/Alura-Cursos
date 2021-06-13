import React, { useContext } from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { DataContext } from '../provider/provider'

const ShoppingBag = () => {
  const navigation = useNavigation()
  const { checkoutItems } = useContext(DataContext)

  return (
    <TouchableOpacity
      onPress={() => navigation.push('Checkout')}
      style={styles.shoppingBagContainer}
    >
      <Image
        source={require('../../assets/images/icone-sacola.png')}
        style={styles.shoppingBag}
      />

      {checkoutItems.length > 0 ? (
        <View style={styles.quantityItemsContainer}>
          <Text style={styles.quantityItems}>
            {checkoutItems.reduce(
              (sumItems, items) => sumItems + items.quantity, 0
            )}
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  shoppingBagContainer: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 30
  },
  shoppingBag: {
    height: 30,
    width: 30
  },
  quantityItemsContainer: {
    backgroundColor: '#cc4b37',
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11
  },
  quantityItems: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFF'
  }
})

export default ShoppingBag