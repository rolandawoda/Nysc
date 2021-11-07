import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    Dimensions,
    StatusBar,
    ScrollView
} from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import Input from '../../../components/presentation/Input';
import Button from '../../../components/presentation/Button';
import {loginSuccessful} from '../../../store/actions/auth';

const { width, height } = Dimensions.get("window")

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const gotoRegistration = () => {
        navigation.navigate('Registration')
    }

    const onLogin = (values) => {
        navigation.navigate('Welcome')
        // dispatch(loginSuccessful({}));
    }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../../assets/loginBg.png')}
                resizeMode="cover"
            >
                <LinearGradient colors={['#0E2613', '#2D2D2D69', '#21572D']} style={styles.linearGradient}>

                     <StatusBar barStyle="light-content" />
                    <View style={styles.captionContainer}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={require('../../../assets/logo.png')}
                            />
                        </View>
                        <Text style={styles.title}>NYSC</Text>
                        <Text style={styles.subtitle}>Distance Clearance System</Text>
                    </View>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Email address is not valid').required("Your email address is required"),
                            password: Yup.string().required("Password cannot be empty"),
                        })}

                        onSubmit={onLogin}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                                <View style={{marginBottom: 20}}>
                                    <View style={styles.row}>
                                        <Input
                                            icon="mail"
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            error={Boolean(errors.email)}
                                            touched={Boolean(touched.email)}
                                            value={values.email}
                                            placeholder="Email"
                                            errorMessage={errors.email}
                                        />
                                    </View>
                                    <Input
                                        icon="lock"
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        error={Boolean(errors.password)}
                                        touched={Boolean(touched.password)}
                                        value={values.password}
                                        placeholder="Password"
                                        errorMessage={errors.password}
                                        secureTextEntry
                                    />
                                    <View style={styles.forgotContainer}>
                                        <Button textStyle={styles.forgotPassword} bottomLineStyle={styles.bottomLine}>
                                            Forgot Password ?
                                        </Button>
                                    </View>

                                    <Button variant="contained" onPress={handleSubmit}>
                                        Login
                                    </Button>
                                </View>
                            )}
                    </Formik>

                    <Button onPress={gotoRegistration} >
                        Create New Account
                    </Button>
                </LinearGradient>
            </ImageBackground>
        </ScrollView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    linearGradient: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    captionContainer: {
    },
    title: {
        color: 'white',
        fontFamily: "Bahnschrift",
        fontSize: 100,
        textAlign: "center"
    },
    subtitle: {
        color: 'white',
        fontFamily: "Bahnschrift",
        fontSize: 15,
        textAlign: "center",
        marginBottom: 60
    },
    backgroundImage: {
        minHeight: height,
        width,
        flex: 1,
        resizeMode: "cover"
    },
    logoContainer: {
        alignItems: "center",
    },
    logo: {
        width: width / 2.5,
        height: width / 2.5,
        resizeMode:"contain"
    },
    row: {
        marginBottom: 20
    },
    forgotContainer: {
        alignItems: "flex-end",
        marginBottom: 20
    },
    forgotPassword: {
        fontSize: 15
    },
    bottomLine: {
        borderBottomColor: "transparent"
    }

})