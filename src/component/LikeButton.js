import React from "react";
import {View , Text  , StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Like = () => {

    return (
        <TouchableOpacity style={styles.buttonContainer} >
        <Icon name="heart-circle-outline" size={30} color="red" />
      </TouchableOpacity>
      
    );

};


const styles = StyleSheet.create({
    buttonContainer: {
      
        
        // marginLeft: 100,
        top:10,
        left:10
       
       
     
      },
})


export default Like;
