/* eslint-disable prettier/prettier */
import React ,  {useState , useEffect} from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Dimensions , ActivityIndicator , Alert } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Icons from 'react-native-vector-icons/dist/Ionicons';
import axios from "axios";
import { moderateScale, scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import * as yup from 'yup';
import { Formik } from "formik";
import { registerUser } from "../../api/auth";
import { showSnackBar } from "../../utils/snackbar";


const signUpValidation = yup.object().shape({
    name: yup
        .string()
        .required('Name is required '),
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, 'Password must have small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have small letter')
        .matches(/\d/, 'Password must have number')
        .matches(
            /[!@#$%^&*()\-_"=+{}; :,<.>]/,
            'Password must have a special character',
        )
        .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
        .required('Password is required'),

})



const Register = () => {
    const navigation = useNavigation();

    const [showSpinner , setShowSpinner ] = useState(false);  
    const [showPassword , setShowPassword ] = useState(false );
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };




    return (
        <View style={styles.loginMain}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.signInText}>Register in to access more features  </Text>
                </View>



                <View style={styles.formContainer}>
                    <Formik
                        validationSchema={signUpValidation}
                        initialValues={{
                            name: '',
                            email: '',
                            password: ''
                        }}

                        onSubmit={async (values) => {
                            setShowSpinner(true);
                            console.log(values); // Use values, not 'values'
                            registerUser(values).then(res => {
                                console.log("Response" , res);
                                setShowSpinner(false);
                                Alert.alert(
                                    " ",
                                    res.msg,
                                    )
                                    [
                                        {
                                            text: 'OK ',
                                            onPress: () =>{
                                                navigation.navigate('Login')
                                            }
                                        }
                                    ]
                               
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

                                        <TextInput style={styles.input}
                                            placeholder="Enter Name"
                                            keyboardType="Name"
                                            name="name"
                                            onChangeText={handleChange('name')}
                                        />


                                        {(errors.name && touched.name) &&
                                            <Text style={{ fontSize: scale(10), color: 'red'  , marginTop:scale(5)}}>{errors.name}</Text>

                                        }

                                    </View>
                                    <View style={styles.wrapper}>

                                        <TextInput style={styles.input}
                                            placeholder="Enter email"
                                            keyboardType="email-address"
                                            name="email"
                                            onChangeText={handleChange('email')}
                                        />


                                        {(errors.email && touched.email) &&
                                            <Text style={{ fontSize: scale(10), color: 'red' , marginTop:scale(5) }}>{errors.email}</Text>

                                        }

                                    </View>
                                    <View style={styles.wrapper}>
                                        <View style={styles.input}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <TextInput placeholder="Enter password"
                                                        secureTextEntry={!showPassword}
                                                        name="password"
                                                        onChangeText={handleChange('password')}
                                                    />


                                                    {(errors.password && touched.password) &&
                                                        <Text style={{ fontSize: scale(10), color: 'red' , marginTop:scale(5) }}>{errors.password}</Text>

                                                    }

                                                </View>
                                                <TouchableOpacity
                                                   onPress={toggleShowPassword}
                                                 style={{ alignItems: 'center' }}>
                                                    <Icons name="key-outline" size={20} />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>



                                </View>
                                <View style={styles.btnContainer}>

                                    <TouchableOpacity onPress={handleSubmit} 
                                        style={{ backgroundColor: 'darkblue', height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                                        <Text style={{ color: 'white' }}>Register</Text>


                                        {    showSpinner && (<ActivityIndicator   color={'white'} />)} 
                                    </TouchableOpacity>
                                </View>

                            </>
                        )}





                    </Formik>

                </View>

                <View style={styles.footerContainer}>
                    <View style={styles.footerContainerInner}>
                        <Text style={styles.newUserText}>I am new already user </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.signText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <TouchableOpacity>
                            <Text style={styles.skipText}>Skip</Text>
                        </TouchableOpacity>
                    </View>

                </View>



            </ScrollView>


        </View>
    )
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
    formContainer: {

    },
    inputContainer: {

    },
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
        color: 'blue'
    },

    newUserText: {
        color: 'black'
    },
    skipText: {
        color: 'blue'
    }


})



export default Register;