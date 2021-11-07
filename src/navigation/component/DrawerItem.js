import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {palette} from '../../theme/colors';

const DrawerItem = ({label, icon, color, ...props}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.screen ? navigation.navigate(props.screen) : props.onPress(dispatch)}>
            <Icon name={icon} color={palette.secondary} size={24} style={[styles.icon]} />
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    icon: {
        marginRight: 25
    }
})

export default DrawerItem;