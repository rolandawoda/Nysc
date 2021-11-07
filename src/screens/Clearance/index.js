import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ImageBackground,
    Alert,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";

import BackButton from '../../components/presentation/BackButton';
import { useTheme } from '../../components/container/ThemeManager';
import TakePicture from '../../components/container/TakePicture';
import Input from '../../components/presentation/Input';
import Button from '../../components/presentation/Button';

import { palette } from '../../theme/colors';


const { width, height } = Dimensions.get("window");
const CONTENT_HEIGHT = height * 0.78;
const HEADER_HEIGHT = height * 0.22;

const Clearance = ({ navigation }) => {
    const { theme } = useTheme();

    const goBack = () => {
        navigation.goBack()
    }



    const completePayment = () => {
        Alert.alert(
            "Payment Successful",
            "You have successful requested for your clearance for the month of July to continue please contact your place of primary Assignment (PPA) for your clearance code",
            [
                { text: "OK", onPress: () => goBack() }
            ],
            { cancelable: false }
        );
    }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/dashboard/background.png')}
                resizeMode="cover"
            >
                <SafeAreaView style={{flex: 1, marginBottom: 50}}>
                    <View style={styles.headerContainer}>
                        <View style={styles.navigation}>
                            <BackButton iconColor="#fff" textStyle={{ color: '#fff' }} onPress={goBack}>
                                Clearance
                            </BackButton>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <Formik
                            initialValues={{
                                callupNumber: '',
                                ppa1: '',
                                ppa2: '',
                                ppa3: ''
                            }}
                            validationSchema={Yup.object({
                                callupNumber: Yup.string().required("Your callup number is required"),
                                ppa1: Yup.string().required("Your place of primary assignment is required"),
                                ppa2: Yup.string().required("Your place of primary assignment is required"),
                                ppa3: Yup.string().required("Your place of primary assignment is required"),
                            })}

                            onSubmit={(values) => {
                                console.log(values)
                                completePayment();
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
                                        <View style={styles.pictureContainer}>
                                            <TakePicture />
                                        </View>
                                        <View style={styles.row}>
                                            <Input
                                                onChangeText={handleChange('callupNumber')}
                                                onBlur={handleBlur('callupNumber')}
                                                error={Boolean(errors.callupNumber)}
                                                touched={Boolean(touched.callupNumber)}
                                                value={values.callupNumber}
                                                placeholder="Verify Callup Number"
                                                errorMessage={errors.callupNumber}
                                                placeholderTextColor={palette.primary}
                                                containerStyle={{ backgroundColor: '#fff' }}
                                                textColor={'grey'}
                                            />
                                        </View>
                                        <View style={styles.row}>
                                            <Input
                                                onChangeText={handleChange('ppa1')}
                                                onBlur={handleBlur('ppa1')}
                                                error={Boolean(errors.ppa1)}
                                                touched={Boolean(touched.ppa1)}
                                                value={values.ppa1}
                                                placeholder="Place of Primary Assignment"
                                                errorMessage={errors.ppa1}
                                                placeholderTextColor={palette.primary}
                                                containerStyle={{ backgroundColor: '#fff' }}
                                                textColor={'grey'}
                                            />
                                        </View>
                                        <View style={styles.row}>
                                            <Input
                                                onChangeText={handleChange('ppa2')}
                                                onBlur={handleBlur('ppa2')}
                                                error={Boolean(errors.ppa2)}
                                                touched={Boolean(touched.ppa2)}
                                                value={values.ppa2}
                                                placeholder="Place of Primary Assignment"
                                                errorMessage={errors.ppa2}
                                                placeholderTextColor={palette.primary}
                                                containerStyle={{ backgroundColor: '#fff' }}
                                                textColor={'grey'}
                                            />
                                        </View>
                                        <View style={styles.row}>
                                            <Input
                                                onChangeText={handleChange('ppa3')}
                                                onBlur={handleBlur('ppa3')}
                                                error={Boolean(errors.ppa3)}
                                                touched={Boolean(touched.ppa3)}
                                                value={values.ppa3}
                                                placeholder="Place of Primary Assignment"
                                                errorMessage={errors.ppa3}
                                                placeholderTextColor={palette.primary}
                                                containerStyle={{ backgroundColor: '#fff' }}
                                                textColor={'grey'}
                                            />
                                        </View>
                                        <View style={{ marginBottom: 60 }} />
                                        <Button variant="contained" onPress={handleSubmit} containerStyle={{ backgroundColor: palette.primary }} textStyle={{ color: '#fff' }}>
                                            Request
                                    </Button>
                                    </View>
                                )}
                        </Formik>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width,
        height,
        resizeMode: "cover"
    },
    headerContainer: {
        width,
        height: HEADER_HEIGHT,
        paddingTop: 40
    },
    contentContainer: {
        width,
        flex: 1,
        backgroundColor: "#F7F7FA",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
        padding: 25
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 25
    },
    row: {
        marginBottom: 20
    },
    pictureContainer: {
        marginBottom: 50
    }
})

export default Clearance;