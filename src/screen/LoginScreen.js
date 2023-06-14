import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function LoginScreen({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <Text>Usuario</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Usuario"
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />

      <Button
        title="Ingresar"
        onPress={() =>
          navigation.navigate('ProductListScreen', {name: 'Jane'})
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
