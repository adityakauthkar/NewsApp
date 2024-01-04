import React from "react";
import {View , Text  , StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Share = () => {

    return (
        <TouchableOpacity style={styles.buttonContainer} >
        <Icon name="share-outline" size={30} color="white" />
      </TouchableOpacity>
    );

};


const styles = StyleSheet.create({
    buttonContainer: {
      
        
        // marginLeft: 100,
        top:10,
        left:10,
       
        marginLeft:10,
      position:'relative'
       
       
     
      },
})


export default Share;
