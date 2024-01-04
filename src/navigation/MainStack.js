/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import splashscreen from '../screens/login';
import NewsDetails from '../screens/NewsDetails';
import CategoryList from '../screens/CategoryList';
import About from '../screens/about';



const Stack = createStackNavigator();

const MainStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}

      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={splashscreen} />
      <Stack.Screen name="Tabs" component={Tabs} />

      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );

};



export default MainStack;
