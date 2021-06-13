import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { DataContext } from '../provider/provider'

import { useNavigation } from '@react-navigation/native'

import currencyFormat from '../utils/utils'

import Button from './Button'

const ItemDescription = ({ title, image, studio, description, name, price, id }) => {
  const { addItem } = useContext(DataContext)
  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosition}>
        <View style={styles.item}>
          <View style={styles.textPosition}>
            <View>
              <Text style={styles.textUpper}>{ studio }</Text>
              <Text style={styles.textHalf}>{ name }</Text>
              <Text style={styles.textBottom}>{ title }</Text>
            </View>

            <Image
              source={image}
              style={styles.itemImage}
            />
          </View>

          <Text style={styles.textDescription}>{ description }</Text>

          <View style={styles.footer}>
            <Text style={styles.price}>{ currencyFormat(price) }</Text>

            <Button
              title={'COMPRAR'}
              width={'90%'}
              onPress={() => {
                addItem({
                  studio,
                  name,
                  title,
                  id,
                  image,
                  price,
                })
                navigation.push('Checkout')
              }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60
  },
  itemPosition: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4
  },
  textPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textUpper: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4
  },
  textHalf: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 4
  },
  textBottom: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#CACACA',
    marginBottom: 12
  },
  itemImage: {
    width: 30,
    height: 72
  },
  textDescription: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#ACAAAB',
    marginTop: 10
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000'
  }
})

export default ItemDescription