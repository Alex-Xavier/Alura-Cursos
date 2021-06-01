import { StyleSheet } from 'react-native'

export const colors = {
  purple: '#A050BE',
  orange: '#FABE50',
  blackish: '#555',
  white: '#fff',
  gray: '#C7C7C7'
}

export default StyleSheet.create({
  fill: {
    flex: 1
  },
  adjustScreenUp: {
    flex: 1,
    backgroundColor: colors.purple
  },
  adjustScreenLow: {
    flex: 0,
    backgroundColor: colors.orange
  }
})