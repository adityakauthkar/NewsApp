/* eslint-disable prettier/prettier */

import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff", // Adjust the background color as needed
    },
    image: {
      width: 200, // Adjust the image size as needed
      height: 200, // Adjust the image size as needed
      resizeMode: "contain", // Adjust the image resizeMode as needed
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    text: {
      fontSize: 16,
      textAlign: "center",
      paddingHorizontal: 20,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
    },
    skipTextColor: {
      color: 'green',
      fontWeight: "bold",
    },
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(0, 0, 0, .2)",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
  });



  export default styles;