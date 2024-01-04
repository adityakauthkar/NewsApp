/* eslint-disable prettier/prettier */
import { StyleSheet} from "react-native";
import { create } from "react-test-renderer";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: 'white'
      },
    
      SplashScreen_RootView: {
        justifyContent: "center",
        flex: 1,
        margin: 10,
        position: "absolute",
        width: "100%",
        height: "100%",
      },
    
      SplashScreen_ChildView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
})

export default styles; 