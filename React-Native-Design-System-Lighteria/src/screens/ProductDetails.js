import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProductDetails = ({ route }) => {
  const { title, image, studio, description, name, price, id } = route.params

  return (
    <View style={styles.container}>
      <Text>{ title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ProductDetails