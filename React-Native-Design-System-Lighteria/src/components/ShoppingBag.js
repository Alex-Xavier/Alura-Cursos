import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ShoppingBag = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.push('Checkout')}
      style={styles.shoppingBagContainer}
    >
      <Image
        source={require('../../assets/images/icone-sacola.png')}
        style={styles.shoppingBag} />
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
  }
})

export default ShoppingBag