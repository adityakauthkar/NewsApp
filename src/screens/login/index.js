/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
import React, { useState  , useEffect} from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Dimensions  , ActivityIndicator} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Icons from 'react-native-vector-icons/Ionicons'; // Corrected the import statement for Icons
import { moderateScale, scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import * as yup from 'yup';
import { Formik, Field, connect } from "formik";
import { loginUser } from "../../api/auth";
import { value } from "react-native-extended-stylesheet";
import { showSnackBar } from "../../utils/snackbar";
import * as authAction from '@Action/authAction';
import { updateUserAccessToken } from "../../redux/action/authAction";
import PropTypes from 'prop-types';


const signInValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required'),
});





const Login = () => {
    

    // const {updateUserLogin, updateUserAccessToken, user, isLoggedIn } = props;

    const navigation = useNavigation();

    const [showSpinner , setShowSpinner ] = useState(false);  
    const [showPassword , setShowPassword ] = useState(false );
    

const toggleShowPassword = () => {
    setShowPassword(!showPassword);
}



    return (
        <View style={styles.loginMain}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.signInText}>Sign in to access more features</Text>
                </View>

                <View style={styles.formContainer}>
                    <Formik
                        validationSchema={signInValidationSchema}
                        initialValues={{ email: '', password: '' }} // Fixed the object initialization
                        onSubmit={async (values) => {
                            setShowSpinner(true);
                            console.log(values); // Use values, not 'values'
                            

                            loginUser(values).then(res => {
                                
                                console.log("Response" , res);
                                setShowSpinner(false);
                                navigation.navigate('Home');
                                updateUserLogin(res , true);
                                updateUserAccessToken(res.token);
                                showSnackBar('Successfully LoggedIn');

                                console.log("User coming from state" , user);
                                console.log("isLoggedIn coming from state" , isLoggedIn);
                            }).catch(err =>{
                                console.log("Errors" , err.response.data?.msg);
                                setShowSpinner(false);
                                showSnackBar(err.response.data?.msg , 'ERROR');
                            })
                        }}
                    >
                        {({ handleSubmit, isValid, values, errors, handleChange, touched }) => (
                            <>
                                <View style={styles.inputContainer}>
                                    <View style={styles.wrapper}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter email"
                                            keyboardType="email-address"
                                            name="email"
                                            onChangeText={handleChange('email')}
                                        />
                                        {(errors.email && touched.email) &&
                                            <Text style={{ fontSize: 10, color: 'red' , marginTop:scale(5) }}>  {errors.email}</Text>}
                                    </View>
                                    <View style={styles.wrapper}>
                                        <View style={styles.input}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <TextInput
                                                        placeholder="Enter password"
                                                        secureTextEntry={!showPassword}
                                                        name="password"
                                                        onChangeText={handleChange('password')}
                                                    />
                                                    {(errors.password && touched.password) &&
                                                        <Text style={{ fontSize: 10, color: 'red' , marginTop:scale(5) }}>  {errors.password}</Text>}
                                                </View>
                                                <TouchableOpacity 
                                              onPress={toggleShowPassword}
                                                style={{ alignItems: 'center' }} >
                                                    <Icons name="key-outline" size={20} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.forgetPasswordContainer}>
                                        <TouchableOpacity>
                                            <Text style={styles.forgetPasswordText}>Forget Password</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.btnContainer}>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={{ backgroundColor: 'darkblue', height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                                        <Text style={{ color: 'white' }}>Login</Text>

                                        {    showSpinner && (<ActivityIndicator   color={'white'} />)} 
                                        
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.footerContainerInner}>
                        <Text style={styles.newUserText}>I am a new user</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.signText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                            <Text style={styles.skipText}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    loginMain: {
        flex: 1,
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20)
    },
    headerContainer: {
        height: Dimensions.get('window').height / 4,
        justifyContent: 'center'
    },
    welcomeText: {
        fontSize: moderateScale(30),
        fontWeight: 'bold',
        color: 'black',
    },
    signInText: {
        color: 'black',
        fontSize: moderateScale(15),
        letterSpacing: 0.5,
        fontWeight: 'bold'
    },
    formContainer: {},
    inputContainer: {},
    wrapper: {
        marginTop: moderateScale(30)
    },
    input: {
        height: moderateScale(55),
        borderWidth: moderateScale(1),
        borderColor: 'black',
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(10),
        fontWeight: 'bold'
    },
    forgetPasswordContainer: {
        alignItems: 'flex-end',
    },
    forgetPasswordText: {
        fontSize: moderateScale(12),
        color: 'blue'
    },
    btnContainer: {
        marginTop: '10%',
    },
    footerContainer: {
        height: Dimensions.get('window').height / 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    footerContainerInner: {
        flexDirection: 'row'
    },
    signText: {
        marginLeft: moderateScale(5),
        color: 'blue',
    },
    newUserText: {
        color: 'black',
    },
    skipText: {
        color: 'blue',
    }
});


// Login.propTypes = {
//     user: PropTypes.object.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired,
//     updateUserLogin: PropTypes.func.isRequired,
//     updateUserAccessToken: PropTypes.func.isRequired
// };

// const mapStateToProps = (state) => {
//     return {
//         user: state.auth.user,
//         isLoggedIn: state.auth.isLoggedIn
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     updateUserLogin: (user, isLoggedIn) => dispatch(authAction.updateUserLogin(user, isLoggedIn)),
//     updateUserAccessToken: (token) => dispatch(authAction.updateUserAccessToken(token))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login ; 





