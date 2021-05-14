import { StyleSheet } from 'react-native'
import { colors } from './global'

export default (small, inverse) => StyleSheet.create({
  button: {
    width: 140,
    paddingVertical: small ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: inverse ? colors.orange : colors.purple,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  value: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: inverse ? colors.purple : colors.orange
  }
})