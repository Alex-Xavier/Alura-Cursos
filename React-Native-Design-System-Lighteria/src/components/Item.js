import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Item = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
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