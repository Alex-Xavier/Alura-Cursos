import React from 'react'
import { View, StyleSheet } from 'react-native'

import Background from '../components/Background'
import ItemDescription from '../components/ItemDescription'

const ProductDetails = ({ route }) => {
  const { title, image, studio, description, name, price, id } = route.params

  return (
    <View style={styles.container}>
      <Background />

      <ItemDescription
        title={title}
        image={image}
        studio={studio}
        description={description}
        name={name}
        price={price}
        id={id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ProductDetails