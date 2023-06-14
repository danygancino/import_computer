import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default function ProductListScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Lista de productos</Text>
      <Button
        title="Carrito"
        onPress={() =>
          navigation.navigate('CarScreen', {name: 'Jane'})
      }
    />
     <Button
        title="Detalle"
        onPress={() =>
          navigation.navigate('ProductDetailScreen', {name: 'Jane'})
      }
    />
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
