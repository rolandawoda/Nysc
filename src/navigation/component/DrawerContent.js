import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation, DrawerActions, CommonActions } from '@react-navigation/native';

import DrawerItem from './DrawerItem';
import { logoutUserSuccess } from '../../store/actions/auth';
import { palette } from '../../theme/colors';

const { width } = Dimensions.get('window')
const DRAWER_WIDTH = width * 0.7


const navItems = [
    {
        label: "Payment",
        screen: 'Payment',
        icon: "payment",
    },
    {
        label: "Logout",
        onPress: (dispatch) => {
            dispatch(logoutUserSuccess());
        },
        icon: "logout"
    }
]

const DrawerContent = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Icon name="x" size={25} color={"white"} onPress={() => navigation.dispatch(DrawerActions.closeDrawer())} />
                    <Text style={{ color: "white" }}>My Profile</Text>
                    <View/>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.circle}>
                    <FIcon name="user-circle" size={100} color="#fff"  />
                </View>
                <View style={styles.bodyHeader}>
                    <Text style={styles.name}>Awoda Roland</Text>
                    <Text style={styles.email}>rolandawoda@gmail.com</Text>
                </View>
                <View style={styles.navLinks}>
                    {navItems.map((item, i) => {
                        return (
                            <DrawerItem key={i}  {...item} />
                        )
                    })}
                </View>

            </View>
            <View style={styles.footer}>
                <View style={styles.footerContent}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.primary
    },
    header: {
        flex: 0.2,
        backgroundColor: palette.primary,
    },
    headerContent: {
        flex: 1,
        backgroundColor: palette.primary,
        borderBottomRightRadius: 75,
        flexDirection: 'row',
        paddingTop: 40,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    body: {
        flex: 0.8,
        backgroundColor: 'white',
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75,
        padding: 50,
    },
    navLinks: {
        flex: 1,
    },
    footer: {
        flex: 0.2,
        backgroundColor: palette.primary,
    },
    footerContent: {
        flex: 1,
        backgroundColor: palette.primary,
        borderTopLeftRadius: 75
    },
    name: {
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 4,
        fontSize: 20
    },
    email: {
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)'
    },
    bodyHeader: {
        marginVertical: 25
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: palette.secondary,
        top: -50,
        left: (DRAWER_WIDTH - 100) / 2

    }
})

export default DrawerContent;