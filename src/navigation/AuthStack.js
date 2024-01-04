import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import SplashScreen from '../screens/splashscreen';
import Login from '../screens/login';
import Register from '../screens/register';
import OnboardingScreen from '../screens/onboarding';
import NewsDetails from '../screens/NewsDetails';
import CategoryList from '../screens/CategoryList';
import About from '../screens/about';

const Stack = createStackNavigator(); //navigate from one screen to another

const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
  
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Tabs}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
``
export default AuthStack;
