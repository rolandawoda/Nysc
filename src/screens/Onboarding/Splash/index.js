import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';
import { useTheme } from '../../../components/container/ThemeManager';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import { loginSuccessful } from '../../../store/actions/auth';
import { appLoadingComplete } from '../../../store/actions/app';

import app from '../../../constant/app'
import { getStorageItem } from '../../../utils';

const { width, height } = Dimensions.get("window")
const LOGO_DIMENSION = width / 1.5;

const wait = (duration) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}


const SplashScreen = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch()

    const checkUserAuthentication = async () => {
        try {
            const userProfile = await getStorageItem(app.authStorageKey);
            if (userProfile) {
                dispatch(loginSuccessful(JSON.parse(userProfile)))
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(appLoadingComplete())
        }
    }

    useEffect(() => {
        wait(app.startUpDelay).then(() => {
            checkUserAuthentication()
        })
    }, [dispatch])

    return (
        <View style={[styles.container, { backgroundColor: theme.primary }]}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../../assets/loginBg.png')}
                resizeMode="cover"
            >
                <LinearGradient colors={['rgba(33,87,45, 0.85)', '#21572D', 'rgba(33,87,45,1)']} style={styles.linearGradient}>
                <StatusBar hidden={true} />
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/logo.png')}
                    />
                    <Text style={styles.text}>Distance Clearance System</Text>
                </LinearGradient>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        width,
        height,
        resizeMode: "cover"
    },
    logo: {
        width: LOGO_DIMENSION,
        height: LOGO_DIMENSION,
    },
    text: {
        fontFamily: 'Bahnschrift',
        color: '#fff',
        marginTop: -30
    }
})

export default SplashScreen;