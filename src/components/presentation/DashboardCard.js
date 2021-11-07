import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';


const {width} = Dimensions.get('window')

const ICON_RADIUS = (width - (20 * 3)) * 0.2
console.log(ICON_RADIUS, width)

const DashboardCard = ({ icon, title, style, color, uri, ...rest }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: color }, style]} activeOpacity={0.8} {...rest}>
            <Image
                style={styles.icon}
                source={uri}
            />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 20
    },
    icon: {
        height: ICON_RADIUS,
        width: ICON_RADIUS,
        borderRadius: ICON_RADIUS / 2,
        backgroundColor: 'yellow',

    },
    title: {
        fontFamily: 'Bahnschrift',
        fontSize: 18,
        marginTop: 20,
        color: '#fff'
    }

})

export default DashboardCard;