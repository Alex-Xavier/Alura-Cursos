import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Item = ({ title, image, studio, description, name, price, id }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('Detalhes do Produto', {
        title, image, studio, description, name, price, id
      })} >
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 168,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  image: {
    resizeMode: 'contain',
    height: 84
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#848486'
  }
})

export default Item