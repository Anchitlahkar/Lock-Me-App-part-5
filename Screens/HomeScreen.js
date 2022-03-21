import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
    Image
} from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'
import { textDecorationColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea} />

                {/* Heading */}
                <View style={styles.headingContainer}>

                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text style={[styles.titleText1, { fontStyle: "normal" }]}>😊 </Text>
                        <Text style={styles.titleText1}>Look </Text>
                        <Text style={styles.titleText2}>Me</Text>
                        <Text style={[styles.titleText1, { fontStyle: "normal" }]}> 😊 </Text>
                    </View>
                </View>

                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={styles.contentText}>
                            'Look Me' is the best phto filter app for pictures with the funny camera effects.
                            With The Stunning live photo filters directly on your face.
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 0.25 }} >
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/filter/crown-pic1.png')} style={{ height: 64, width: 160, resizeMode: "contain" }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/filter/flower-pic1.png')} style={{ height: 64, width: 160, resizeMode: "contain" }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", flex: 0.25 }} >
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/filter/hat-pic1.png')} style={{ height: 64, width: 160, resizeMode: "contain" }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/filter/other-pic1.png')} style={{ height: 64, width: 160, resizeMode: "contain" }} />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Main") }}>
                        <View style={styles.button} >
                            <Text style={styles.buttonText}>Try Now</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000"
    },

    titleText: {
        fontSize: 30
    },

    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: "italic",
    },

    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: "italic",

    },

    contentContainer: {
        flex: 0.6,
        margin: RFValue(5),
        borderRadius: RFValue(15),
        backgroundColor: "white",
        height: "100%",
        padding: RFValue(20),
    },

    contentText: {
        fontSize: RFValue(17),
        fontStyle: "italic",
        fontWeight: "bold",
    },

    buttonContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        backgroundColor: "green",
        paddingLeft: RFValue(50),
        paddingRight: RFValue(50),
        paddingTop: RFValue(20),
        paddingBottom: RFValue(20),
        borderRadius: RFValue(20),
    },

    buttonText: {
        fontSize: RFValue(25),
        fontStyle: "italic",
        color: "white",
        fontWeight: "bold",
    }
})