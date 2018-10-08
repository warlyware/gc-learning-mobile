import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import TutorialsNavigator from './TutorialsNavigator'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
}

const TutorialsStack = createStackNavigator({
  Tutorials: TutorialsNavigator,
}, {
  navigationOptions: () => ({
    header: null
  })
})

TutorialsStack.navigationOptions = {
  tabBarLabel: 'Tutorials',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? `ios-school${focused ? '' : '-outline'}`
        : 'md-school'
      }
    />
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  TutorialsStack
})
