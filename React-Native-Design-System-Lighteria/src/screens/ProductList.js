import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import { DATA } from '../utils/data'

import Item from '../components/Item'
import Header from '../components/Header'

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Header />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24
  }
})

export default ProductList