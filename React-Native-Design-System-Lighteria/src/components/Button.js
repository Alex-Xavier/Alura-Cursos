import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Button = ({ width = 200, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.position}  
    >
      <View style={[ styles.container, {width} ]}>
        <Text style={styles.text}>{ title }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 160,
    backgroundColor: '#00adef',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  position: {
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  }
})

export default Button