/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';




const SplashScreen = () => {

    const [isVisible, setVisible] = useState(true);
    const navigation = useNavigation();

    const hideSplashscreen = () => {
        setVisible(false);
    };

    useEffect(() => {
        setTimeout(() => {
            hideSplashscreen();
            navigation.navigate('Onboarding');
        }, 1000);
    }, [navigation]);



    // spalshimage will be  displayed 
    const renderSplash = () => {
        return (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    <Image source={require('@Asset/splash_icon_dark.png')}
                        style={{ width: 150, height: 150, resizeMode: 'contain' }} />
                </View>
            </View>
        );
    };





    return (
        <View style={styles.MainContainer}>
            {isVisible === true ? renderSplash() : null}
        </View>
    );




};




export default SplashScreen;
