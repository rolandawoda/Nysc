import React from 'react';
import {
    TextInput as Input,
    View,
    StyleSheet,
    Text,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from '../container/ThemeManager';



const InlineInput = ({ icon, error, touched, textColor, ...rest }) => {
    const genericColor = !touched ? '#ccc' : error ? 'red' : 'green'
    return (
        <View>
            <View style={[styles.inlineContainer,rest.containerStyle]}>
                <View style={styles.leftIcon}>
                    <Icon name={icon} size={20} color={'#fff'} />
                </View>
                <Input
                    style={[styles.input,{color: textColor ? textColor: '#fff' }]}
                    placeholderTextColor="#fff"
                    {...rest}
                />
                {touched &&
                    <View style={[styles.rightIcon, { backgroundColor: genericColor }]}>
                        <Icon name={error ? 'x' : 'check'} size={13} color="white" />
                    </View>
                }
            </View>
            {error && touched && <Text style={styles.errorMessage}>{rest.errorMessage}</Text>}
        </View>

    )
}

const StackedInput = ({ icon, error, touched, label, ...rest }) => {
    const {theme} = useTheme()
    const genericColor = !touched ? '#ccc' : error ? 'red' : 'green'
    const textColor = error ? 'red' : theme.primary
    const borderColor = error ? 'red' : '#fff'
    return (
        <View>
            <View style={styles.stackedContainer}>
                <Text style={[styles.label, {color: textColor}]}>{label}</Text>
                <View style={[styles.inlineContainer, {backgroundColor: "rgb(255,255,255)", borderWidth: 1, borderColor}]}>
                    <Input
                        style={[styles.input, {color: theme.primary}]}
                        placeholderTextColor="grey"
                        {...rest}
                    />
                    {touched &&
                        <View style={[styles.rightIcon, { backgroundColor: genericColor }]}>
                            <Icon name={error ? 'x' : 'check'} size={13} color="white" />
                        </View>
                    }
                </View>
            </View>
            {error && touched && <Text style={styles.errorMessage}>{rest.errorMessage}</Text>}
        </View>

    )
}


const TextInput = (props) => {
    switch (props.variant) {
        case 'stacked':
            return <StackedInput {...props} />
        default:
            return <InlineInput {...props} />
    }
}

const styles = StyleSheet.create({
    inlineContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: 12,
        padding: 10,
        paddingVertical: Platform.OS === 'android'? 5 : 20
    },
    leftIcon: {
        marginRight: 10
    },
    rightIcon: {
        borderRadius: 30,
        padding: 2
    },
    input: {
        flex: 1,
        color: "#fff"
    },
    stackedContainer: {
    },
    errorMessage: {
        color: "red",
        fontSize: 12,
        marginLeft: 10,
        marginTop: 5,
    },
    label: {
        fontFamily: "Bahnschrift",
        fontSize: 13,
        marginBottom: 10
    }

})

export default TextInput;