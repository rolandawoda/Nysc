import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {useTheme} from '../container/ThemeManager';

const WelcomeTagLine = () => {
    const {theme} = useTheme();
    return (
        <View>
            <Text style={styles.title}>Hi John ,</Text>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={[styles.title, {color: theme.secondary}]}>NDCS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontFamily: 'Bahnschrift',
        marginBottom: 10,
        color: '#fff',
        fontSize: 48
    }
})

export default WelcomeTagLine