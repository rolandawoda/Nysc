import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { useTheme } from '../container/ThemeManager';


const BackButton = ({ children, iconColor, ...rest }) => {
    const { theme } = useTheme();
    return (
        <TouchableOpacity
            style={[
                styles.container,
                rest.containerStyle
            ]}
            activeOpacity={0.7}
            {...rest}
        >
                <Icon name="arrow-left" size={25} color={iconColor ? iconColor : "#464F63"} />
                <Text
                    style={[
                        styles.title,
                        {
                            color: rest.color
                        },
                        rest.textStyle
                    ]}
                >
                    {children}
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row'
    },
    title: {
        fontFamily: "Bahnschrift",
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 15
    }
})
export default BackButton;