import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import StandardContainer from './src/components/StandardContainer'

const App = () => {
  return (
    <StandardContainer>
      <View>
        <Text>Lighteria!</Text>

        <Image
          source={require('./assets/images/icone-sacola.png')}
          style={styles.shoppingBag} />
      </View>
    </StandardContainer>
  );
}

const styles = StyleSheet.create({
  shoppingBag: {
    height: 30,
    width: 30
  }
})

export default App