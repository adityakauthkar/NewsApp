/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Home from '../screens/Home';
import Favourite from '../screens/favourite';
import Notification from '../screens/notification';
import Account from '../screens/account';


const Tab = createBottomTabNavigator();//Bottoms Tabs

const Tabs = () => {
    return (

        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'black', 
            inactiveTintColor: 'gray', 
           style:{
            backgroundColor: 'black'
           }
          }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="home-sharp" size={size} color={color} />
                    ),

                    tabBarLabel: '',
                    headerShown:false
                }}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{

                    tabBarIcon: ({ size, color }) => (
                        <Icon name="heart-sharp" size={size} color={color} />
                    ),
                    tabBarLabel: '',
                    headerShown: false
                }}
            />


            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="notifications-sharp" size={size} color={color} />
                    ),
                    tabBarLabel: '',
                    headerShown:false
                }}
            />


            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="person-sharp" size={size} color={color} />
                    ),
                    tabBarLabel: '',
                     headerShown:false
                }}
            />
        </Tab.Navigator>
    );
};


export default Tabs; 
