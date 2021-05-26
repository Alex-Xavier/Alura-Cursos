import React from 'react'
import { View, Text } from 'react-native'

import { statusShoppingCartStyle as styles } from '../styles'

const ShoppingCartStatus = ({ total }) => {
  <View style={styles.content}>
    <View style={styles.total}>
      <Text style={styles.description}>Total do carrinho:</Text>

      <Text style={styles.value}>
        {
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(total)
        }
      </Text>
    </View>
  </View>
}

export default ShoppingCartStatus