import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Dimensions,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image
} from 'react-native';

const { width } = Dimensions.get("window");
const OUTTER_Radii = width / 3
const INNER_Radii = OUTTER_Radii / 3.2

const TakePicture = () => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => console.log("select image")}>
                <View style={styles.iconContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/camera.png')}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 100,
        height: 100
    }
})

export default TakePicture