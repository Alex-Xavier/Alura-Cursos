import React from 'react'
import { View, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ShoppingBag from './ShoppingBag'

const Background = () => {
  const imageSource = require('../../assets/images/bgimg.jpg')
  const navigation = useNavigation()

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        resizeMode='cover'
        source={imageSource}
        style={styles.imageBackground}
      >
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/flecha-esquerda.png')}
            style={styles.imageArrow}
          />
          <View style={styles.shoopingBagContainer}>
            <ShoppingBag />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 6
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: '100%'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageArrow: {
    width: 24,
    height: 24,
    marginTop: 36,
    marginLeft: 24
  },
  shoopingBagContainer: {
    padding: 18
  }
})

export default Background