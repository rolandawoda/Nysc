import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import BackButton from '../../components/presentation/BackButton';
import Input from '../../components/presentation/Input';
import Button from '../../components/presentation/Button';
import ClearanceTable from '../../components/presentation/ClearanceTable';

import {palette} from '../../theme/colors';

const Profile = ({ navigation }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setSelectedDate(date);
    };

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={{ flex: 1 , paddingBottom: 30}}>
                <View style={styles.navigation}>
                    <BackButton onPress={() => navigation.goBack()}>
                        Profile
                </BackButton>
                </View>
                <View style={styles.contentContainer}>
                    <Formik
                        initialValues={{
                            clearanceCode: '',
                        }}
                        validationSchema={Yup.object({
                            clearanceCode: Yup.string().required("Clearance code is required"),
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
                            isSubmitting
                        }) => (
                                <View>
                                    <View style={styles.row}>
                                        <Input
                                            label="Input Clearance Code"
                                            variant="stacked"
                                            onChangeText={handleChange('clearanceCode')}
                                            onBlur={handleBlur('clearanceCode')}
                                            error={Boolean(errors.clearanceCode)}
                                            touched={Boolean(touched.clearanceCode)}
                                            value={values.clearanceCode}
                                            placeholder="*** *** ***"
                                            errorMessage={errors.clearanceCode}
                                            placeholderTextColor={palette.primary}
                                            containerStyle={{ backgroundColor: '#fff' }}
                                        />
                                    </View>
                                    <Button variant="contained" onPress={handleSubmit} containerStyle={{ backgroundColor: palette.primary }} textStyle={{ color: '#fff' }}>
                                        OK
                                </Button>
                                </View>
                            )}
                    </Formik>
                    <Button variant="contained"
                        containerStyle={{
                            backgroundColor: "#fff",
                            alignItems: 'flex-start',
                            marginTop: 20
                        }}
                        textStyle={{
                            color: palette.primary
                        }}
                        onPress={() => { }}
                    >
                        Disciplinary Cases
                </Button>
                    <View>
                        <View style={styles.dateContainer}>
                            <Text style={{ marginRight: 10 }}>
                                Date
                            </Text>
                            <Button
                                onPress={showDatePicker}
                                variant="contained"
                                containerStyle={{
                                    backgroundColor: palette.primary,
                                    paddingVertical: 11
                                }}
                                textStyle={{
                                    color: "#fff",
                                    fontSize: 16,
                                }}
                            >
                                {moment(selectedDate).format('MM-DD-YYYY')}
                            </Button>

                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            headerTextIOS="Select Date"
                        />
                    </View>
                    <View style={styles.clearanceContainer}>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.lga}>LGA Monthly Clearance</Text>
                            <Text style={styles.status}>Clearance Status</Text>
                        </View>
                    </View>
                    <ClearanceTable
                        columns={[
                            {
                                label: "S/N",
                                name: "id",
                            },
                            {
                                label: "Month",
                                name: "month",
                            },

                            {
                                label: "Status",
                                name: "status",
                                render: (rowData) => {
                                    return rowData.status === 0 ?
                                        <Text style={{ color: "red" }}>Pending</Text>
                                        :
                                        rowData.status === 1 ?
                                            <Text style={{ color: "green" }}>Present</Text>
                                            :
                                            <Text style={{ color: "grey" }}>Absent</Text>
                                }
                            },
                        ]}

                        data={[
                            { id: 1, month: 'March/2020', status: 1 },
                            { id: 1, month: 'March/2020', status: 0 },
                            { id: 1, month: 'March/2020', status: 1 },
                            { id: 1, month: 'March/2020', status: 0 },
                            { id: 1, month: 'March/2020', status: 2 },
                            { id: 1, month: 'March/2020', status: 0 },
                        ]}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7FA",
        padding: 20,
        paddingBottom: 50
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    },
    row: {
        marginBottom: 20
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 30
    },
    clearanceContainer: {
        marginTop: 30,
        marginBottom: 10
    },
    lga: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        fontFamily: 'Bahnschrift'
    },
    status: {
        fontSize: 13,
        color: 'grey',
        fontWeight: '600',
        fontFamily: 'Bahnschrift'
    }
})

export default Profile;