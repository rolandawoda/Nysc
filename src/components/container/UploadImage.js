import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Dimensions,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get("window");
const OUTTER_Radii = width / 3
const INNER_Radii = OUTTER_Radii / 3.2

const UploadImage = () => {
    return (
        <View style={styles.container}>
            <Icon name="user-o" size={50} color="#fff" />
            <TouchableWithoutFeedback onPress={() => console.log("select image")}>
                <View style={styles.iconContainer}>
                    <Icon name="arrow-up" size={20} color="green" />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: OUTTER_Radii,
        height: OUTTER_Radii,
        borderRadius: OUTTER_Radii / 2,
        backgroundColor: "rgba(255,255,255, 0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    iconContainer: {
        position: "absolute",
        width: INNER_Radii,
        height: INNER_Radii,
        borderRadius: INNER_Radii / 2,
        borderWidth: 2,
        borderColor: "#fff",
        right: 0,
        bottom: 0,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default UploadImage