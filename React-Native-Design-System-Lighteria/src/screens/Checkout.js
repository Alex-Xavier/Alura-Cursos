import React, { useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { DataContext } from '../provider/provider'

import { useNavigation } from '@react-navigation/native'

import CheckoutItems from '../components/CheckoutItems'
import Button from '../components/Button'

import currencyFormat from '../utils/utils'

const Checkout = () => {
  const { checkoutItems } = useContext(DataContext)
  const navigation = useNavigation()

  const totalPrice = checkoutItems.reduce(
    (sumItems, items) => sumItems + items.quantity * items.price, 0
  )

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      
      {checkoutItems.map(item => (
        <CheckoutItems {...item} key={item.id} />
      ))}

      <Text style={styles.total}>Total: {currencyFormat(totalPrice)}</Text>

      <Button
        title={'FINALIZAR COMPRA'}
        width={'100%'}
        onPress={() => console.log('Comprar!')}
      />

      <TouchableOpacity onPress={() => navigation.push('Lista de Produtos')}>
        <Text style={styles.continueBuyingText}>Continuar comprando</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 16
  },
  continueBuyingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00adef',
    marginTop: 20,
    textAlign: 'center'
  },
  total: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 16
  }
})

export default Checkout