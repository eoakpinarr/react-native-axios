import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Dummy from './pages/Dummy'
import DummyCategory from './pages/DummyCategory'

const App = () => {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerLeft: () => null }}>
        <Stack.Screen 
        name='Dummy' 
        component={Dummy} 
        options= {{
          headerTitle: 'ALIŞVERİŞ'
        }}
        />
        <Stack.Screen 
        name='DummyCategory' 
        component={DummyCategory} 
        options= {{
          headerTitle: 'ÜRÜN DETAYI'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

