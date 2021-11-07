import React from 'react';
import {
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from '../container/ThemeManager';


const Checkbox = ({checked, onCheck, label}) => {
    const {theme} = useTheme()
    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => onCheck()} >
            <View style={[styles.iconContainer, {backgroundColor: checked ? 'green': 'white'}]}>
                <Icon style={styles.icon} name="check" color= "white" size={10}/>
            </View>
                <Text style={[styles.label, {color: theme.secondary}]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'green',
        borderWidth: StyleSheet.hairlineWidth,
        height: 15,
        width: 15,
        borderRadius: 2,
        marginRight: 10,
        padding: 2
    },
    icon: {
        
    },
    label: {
        fontFamily: 'Bahnschrift',
        fontSize: 13
    }
})

export default Checkbox;