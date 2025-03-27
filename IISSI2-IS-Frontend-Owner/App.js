import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import ControlPanelScreen from './src/screens/controlPanel/ControlPanelScreen'
import ProfileScreen from './src/screens/profile/ProfileScreen'
import RestaurantsScreen from './src/screens/restaurants/RestaurantsScreen'
import RestaurantsStack from './src/screens/restaurants/RestaurantsStack'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { navigationTheme } from './src/styles/GlobalStyles';

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer theme={navigationTheme}> 
      
      <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Restaurants') {
            iconName = 'silverware-fork-knife'; // Ícono para Restaurants
          } else if (route.name === 'Control Panel') {
            iconName = 'view-dashboard'; // Ícono para Control Panel
          } else if (route.name === 'Profile') {
            iconName = 'account-circle'; // Ícono para Profile
          }
          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        headerShown: false, // Oculta el encabezado predeterminado
      })}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsStack} />
        <Tab.Screen
          name="Control Panel"
          component={ControlPanelScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen} />
        
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}

