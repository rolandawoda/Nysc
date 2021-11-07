import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Platform
} from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";

import Input from '../../components/presentation/Input';
import Button from '../../components/presentation/Button';
import Checkbox from '../../components/presentation/Checkbox';
import BackButton from '../../components/presentation/BackButton';
import { palette } from '../../theme/colors';

const Payment = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.navigation}>
                    <BackButton onPress={() => navigation.goBack()}>
                        Payment
                    </BackButton>
                </View>
                <Text style={[styles.amount, { color: palette.secondary }]}>₦423.00</Text>
                <Formik
                    initialValues={{
                        cardNumber: '',
                        cardName: '',
                        cvv: '',
                        expiry: '',
                        save: ''

                    }}
                    validationSchema={Yup.object({
                        cardNumber: Yup.string().required("Your card is required"),
                        cardName: Yup.string().required("Your name is required"),
                        cvv: Yup.string().required("Required"),
                        expiry: Yup.string().required("Required"),
                        save: Yup.boolean()
                    })}

                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue
                    }) => (
                            <View>
                                <View style={styles.row}>
                                    <Input
                                        label="CARD NUMBER"
                                        variant="stacked"
                                        onChangeText={handleChange('cardNumber')}
                                        onBlur={handleBlur('cardNumber')}
                                        error={Boolean(errors.cardNumber)}
                                        touched={Boolean(touched.cardNumber)}
                                        value={values.cardNumber}
                                        placeholder="Card Number"
                                        errorMessage={errors.cardNumber}
                                    />
                                </View>
                                <View style={styles.row}>
                                    <Input
                                        label="CARDHOLDER NAME"
                                        variant="stacked"
                                        onChangeText={handleChange('cardName')}
                                        onBlur={handleBlur('cardName')}
                                        error={Boolean(errors.cardName)}
                                        touched={Boolean(touched.cardName)}
                                        value={values.cardName}
                                        placeholder="Card Holder's Name"
                                        errorMessage={errors.cardName}
                                    />
                                </View>
                                <View style={styles.row}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 0.5 }}>
                                            <Input
                                                label="EXPIRY DATE"
                                                variant="stacked"
                                                onChangeText={handleChange('expiry')}
                                                onBlur={handleBlur('expiry')}
                                                error={Boolean(errors.expiry)}
                                                touched={Boolean(touched.expiry)}
                                                value={values.expiry}
                                                placeholder="MM / YYYY"
                                                errorMessage={errors.expiry}
                                            />
                                        </View>
                                        <View style={{ flex: 0.3, marginLeft: 20 }}>
                                            <Input
                                                label="CVV"
                                                variant="stacked"
                                                onChangeText={handleChange('cvv')}
                                                onBlur={handleBlur('cvv')}
                                                error={Boolean(errors.cvv)}
                                                touched={Boolean(touched.cvv)}
                                                value={values.cvv} Z
                                                placeholder="****"
                                                errorMessage={errors.cvv}
                                            />

                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row, { flexDirection: "row" }]}>
                                    <Checkbox
                                        checked={values.save}
                                        label="SAVE CARD"
                                        onCheck={() => setFieldValue('save', !values.save)}
                                    />
                                </View>
                                <View style={{ marginBottom: 30 }} />
                                <Button variant="contained" onPress={handleSubmit} containerStyle={{ backgroundColor: palette.primary }} textStyle={{ color: '#fff' }}>
                                    Pay
                            </Button>
                            </View>
                        )}
                </Formik>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FA',
        padding: 20,
        paddingTop: Platform.OS === 'android' ? 20 : 50
    },
    amountContainer: {

    },
    amount: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'Bahnschrift',
        marginBottom: 50
    },
    row: {
        marginBottom: 40
    },
    navigation: {
        flexDirection: "row",
        marginBottom: 50
    }
})

export default Payment;