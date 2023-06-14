import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


export default function ProductDetailScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Detalle de productos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
