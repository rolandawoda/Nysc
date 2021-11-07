import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

import { useTheme } from '../container/ThemeManager';

const ContainedButton = ({ children, ...rest }) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                styles.containedButton,
                {
                    backgroundColor: rest.background,
                },
                rest.containerStyle
            ]}
            activeOpacity={0.8}
            {...rest}
        >
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

ContainedButton.defaultProps = {
    background: "#fff",
    color: "#000"
}


const OutlinedButton = ({ children, ...rest }) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                styles.outlinedButton,
                {
                    borderWidth: 1,
                    borderColor: rest.color
                },
                rest.containerStyle
            ]}
            activeOpacity={0.8}
            {...rest}
        >
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

OutlinedButton.defaultProps = {
    color: "#000"
}



const DefaultButton = ({ children, ...rest }) => {
    const { theme } = useTheme();
    return (
        <TouchableOpacity
            style={[
                styles.container,
                styles.defaultButton,
                rest.containerStyle
            ]}
            activeOpacity={0.7}
            {...rest}
        >
            <View
                style={[
                    {
                        borderBottomWidth: 1,
                        borderBottomColor: 'grey',
                        paddingBottom: 5
                    },
                    rest.bottomLineStyle
                ]}
            >
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

            </View>
        </TouchableOpacity>
    )
}

DefaultButton.defaultProps = {
    color: "#fff"
}

const Button = (props) => {


    switch (props.variant) {
        case 'contained':
            return <ContainedButton {...props} />
        case 'outlined':
            return <OutlinedButton {...props} />
        default:
            return <DefaultButton {...props} />
    }
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 18,
        paddingHorizontal: 25,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    outlinedButton: {
        backgroundColor: 'transparent'
    },
    containedButton: {

    },
    defaultButton: {
        backgroundColor: 'transparent'

    },
    title: {
        fontFamily: "Bahnschrift",
        textAlign: 'center',
        fontSize: 20,
    }
})
export default Button;