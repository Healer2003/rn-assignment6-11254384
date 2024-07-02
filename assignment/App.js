import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Bag from './Screens/Bag';
import {createStackNavigator} from '@react-navigation/stack'
import { BagContext, BagProvider } from './Components/BagContext';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <BagProvider>
    <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
    <Stack.Screen name='Bag' component={Bag} options={{headerShown:false}}/>
   </Stack.Navigator>
   </NavigationContainer>
   </BagProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
});
