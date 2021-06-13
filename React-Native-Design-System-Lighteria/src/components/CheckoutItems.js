import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import currencyFormat from '../utils/utils'

const CheckoutItems = ({ name, title, image, price, quantity }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTextUpper}>{name}</Text>
        <Text style={styles.descriptionTextBottom}>{title}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          {currencyFormat(price * quantity)}
        </Text>

        <Text style={styles.priceText}>Qtd: {quantity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  imageContainer: {
    flex: 20,
    backgroundColor: '#F7F8FC',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 40,
    height: 50
  },
  descriptionContainer: {
    flex: 45,
    padding: 18,
    justifyContent: 'center'
  },
  descriptionTextUpper: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionTextBottom: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  priceContainer: {
    flex: 35,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  quantityText: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFF'
  },
  priceText: {
    fontWeight: 'bold'
  }
})

export default CheckoutItems