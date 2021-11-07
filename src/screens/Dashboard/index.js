import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    ScrollView,
    Platform,
    SafeAreaView,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import DashboardCard from '../../components/presentation/DashboardCard';
import { useTheme } from '../../components/container/ThemeManager';
import {palette} from '../../theme/colors';


const { width, height } = Dimensions.get("window");
const SPACING_LEFT = 30
const CONTENT_HEIGHT = height * 0.67;
const HEADER_HEIGHT = height * 0.33;
const CARD_HEIGHT = (CONTENT_HEIGHT - 25 - (20 * 2)) / 2.7
const PADDING_OFFSET = 20


const allowanceUri = require('../../assets/dashboard/icon-1.png')
const clearanceUri = require('../../assets/dashboard/icon-2.png')
const cdsUri = require('../../assets/dashboard/icon-3.png')
const profileUri = require('../../assets/dashboard/icon-4.png')

const Dashboard = ({ navigation }) => {
    const { theme } = useTheme();

    const dashboardList = [
        {
            id: 1,
            uri: allowanceUri,
            color: palette.secondary,
            title: 'Allowance',
            press: () => { }
        },
        {
            id: 2,
            uri: clearanceUri,
            color: palette.primary,
            title: 'Clearance',
            press: () => {
                navigation.navigate('Clearance')
            }
        },
        {
            id: 3,
            uri: cdsUri,
            color: palette.primary,
            title: 'CDS',
            press: () => { }
        },
        {
            id: 4,
            uri: profileUri,
            color: palette.secondary,
            title: 'Profile',
            press: () => {
                navigation.navigate('Profile')
            }
        },
    ]

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/dashboard/background.png')}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
                    <View style={styles.headerContainer}>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Icon size={30} name="navicon" color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.captionContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.smallText}>Excepteur sint occaecat</Text>
                                <Text style={styles.bigText}>cupidatat non</Text>
                            </View>
                            <Text style={styles.bigText}>sunt inlpa qui</Text>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.dashboard}>Dashboard</Text>
                        <View style={styles.cardContainer}>
                            <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
                                <View style={{ flex: 1 }}>
                                    {
                                        dashboardList.filter(item => item.id % 2 !== 0).map(item => (
                                            <DashboardCard key={item.id} color={item.color} title={item.title} style={{ height: CARD_HEIGHT }} uri={item.uri} onPress={item.press} />
                                        ))
                                    }
                                </View>
                                <View style={{ flex: 1, marginLeft: 20, paddingTop: PADDING_OFFSET }}>
                                    {
                                        dashboardList.filter(item => item.id % 2 === 0).map(item => (
                                            <DashboardCard key={item.id} color={item.color} title={item.title} style={{ height: CARD_HEIGHT }} uri={item.uri} onPress={item.press} />
                                        ))
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    backgroundImage: {
        width,
        minHeight: height,
        resizeMode: "cover",
        flex: 1

    },
    headerContainer: {
        width,
        height: HEADER_HEIGHT,
    },
    contentContainer: {
        width,
        height: CONTENT_HEIGHT,
    },
    cardContainer: {
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#fff",
        paddingTop: 20
    },
    dashboard: {
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Bahnschrift',
        marginBottom: 15,
        marginLeft: SPACING_LEFT
    },
    captionContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: SPACING_LEFT
    },
    smallText: {
        fontFamily: 'Bahnschrift',
        color: '#fff',
        fontSize: 12,
        marginRight: 2
    },
    bigText: {
        fontFamily: 'Bahnschrift',
        color: '#fff',
        fontSize: 22
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: "center"
    },
    iconContainer: {
        marginTop: Platform.OS === 'android' ? 10 : 0,
        marginLeft: 15,
        flexDirection: 'row'
    }

})

export default Dashboard;