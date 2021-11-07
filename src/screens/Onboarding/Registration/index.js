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

import Input from '../../../components/presentation/Input';
import Button from '../../../components/presentation/Button';
import UploadImage from '../../../components/container/UploadImage';

const { width, height } = Dimensions.get("window")

const Registration = ({navigation}) => {

    const gotoLogin = () => {
        navigation.navigate('Login')
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
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            callupNumber: '',
                            phone: '',
                            ppa: ''

                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Email address is not valid').required("Your email address is required"),
                            name: Yup.string().required("Your fullname is required"),
                            callupNumber: Yup.string().required("Your callup number is required"),
                            phone: Yup.string().required("Phone number is required"),
                            ppa: Yup.string().required("Your place of primary assignment is required"),
                        })}

                        onSubmit={(values) => {
                            gotoLogin()
                        }}
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
                                <View>
                                    <View style={styles.uploadContainer}>
                                        <UploadImage />
                                    </View>
                                    <View style={styles.row}>
                                        <Input
                                            icon="mail"
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            error={Boolean(errors.name)}
                                            touched={Boolean(touched.name)}
                                            value={values.name}
                                            placeholder="Name"
                                            errorMessage={errors.name}
                                        />
                                    </View>
                                    <View style={styles.row}>
                                        <Input
                                            icon="info"
                                            onChangeText={handleChange('callupNumber')}
                                            onBlur={handleBlur('callupNumber')}
                                            error={Boolean(errors.callupNumber)}
                                            touched={Boolean(touched.callupNumber)}
                                            value={values.callupNumber}
                                            placeholder="Callup Number"
                                            errorMessage={errors.callupNumber}
                                        />
                                    </View>
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
                                            keyboardType="email-address"
                                        />
                                    </View>
                                    <View style={styles.row}>
                                        <Input
                                            icon="phone"
                                            onChangeText={handleChange('phone')}
                                            onBlur={handleBlur('phone')}
                                            error={Boolean(errors.phone)}
                                            touched={Boolean(touched.phone)}
                                            value={values.phone}
                                            placeholder="Phone Number"
                                            errorMessage={errors.phone}
                                            keyboardType="number-pad"
                                            />
                                    </View>
                                    <View style={styles.row}>
                                        <Input
                                            onChangeText={handleChange('ppa')}
                                            onBlur={handleBlur('ppa')}
                                            error={Boolean(errors.ppa)}
                                            touched={Boolean(touched.ppa)}
                                            value={values.ppa}
                                            placeholder="Place of Primary Assignment"
                                            errorMessage={errors.ppa}
                                        />
                                    </View>
                                    <View style={{ marginBottom: 30 }} />
                                    <Button variant="contained" onPress={handleSubmit}>
                                        Register
                                    </Button>
                                </View>
                            )}
                    </Formik>
                </LinearGradient>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    linearGradient: {
        flex: 1,
        padding: 20,
    },
    backgroundImage: {
        minHeight: height,
        width,
        flex: 1,
        resizeMode: "cover"
    },
    row: {
        marginBottom: 20
    },
    uploadContainer: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 50,
    }
})

export default Registration;