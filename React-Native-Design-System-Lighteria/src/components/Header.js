import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LIGHTERIA</Text>

        <View style={styles.shoppingBagContainer}>
          <Image
            source={require('../../assets/images/icone-sacola.png')}
            style={styles.shoppingBag} />
        </View>
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
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  shoppingBagContainer: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 30
  },
  shoppingBag: {
    height: 30,
    width: 30
  },
  descriptionContainer: {
    paddingHorizontal: 24
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