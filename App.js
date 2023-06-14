import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/screen/LoginScreen'
import ProductListScreen from './src/screen/ProductListScreen'
import ProductDetailScreen from './src/screen/ProductDetailScreen'
import CarScreen from './src/screen/CarScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />  
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />       
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />       
        <Stack.Screen name="CarScreen" component={CarScreen} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}