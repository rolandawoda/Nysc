import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import Button from '../../../components/presentation/Button';
import WelcomeTagLine from '../../../components/presentation/WelcomeTagLine';
import {loginSuccessful} from '../../../store/actions/auth';

const { width, height } = Dimensions.get("window")

const Welcome = ({navigation}) => {
    const dispatch = useDispatch();

    const onSetGps = (values) => {
        dispatch(loginSuccessful({}));
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../../assets/welcome.png')}
                resizeMode="cover"
            >
                <LinearGradient colors={['#0E2613', '#2D2D2D69', '#21572D']} style={styles.linearGradient}>
                    <View style={styles.skipContainer}>
                        <Button variant="contained" containerStyle={styles.btnStyle} textStyle={styles.textStyle} onPress={onSetGps}>
                            Skip
                        </Button>
                    </View>
                    <View>
                        <WelcomeTagLine />
                        <Text style={styles.gpsText}>Please turn on your GPS</Text>
                    </View>
                    <Button variant="contained" onPress={onSetGps}>
                        Turn on GPS
                   </Button>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    linearGradient: {
        flex: 1,
        padding: 35,
        justifyContent: "space-around"
    },
    backgroundImage: {
        minHeight: height,
        width,
        flex: 1,
        resizeMode: "cover"
    },
    gpsText: {
        color: "#fff",
        marginVertical: 50,
        fontFamily: 'Bahnschrift',
        fontSize: 15
    },
    skipContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btnStyle: {
        backgroundColor: 'rgba(255,255,255, 0.2)',
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: 'rgba(255,255,255, 0.5)',
    },
    textStyle: {
        color: '#fff'
    }
})

export default Welcome;