import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useFonts} from "@expo-google-fonts/magra";
import {styles as DStyles} from "../../../Pages/Dashboard";

const StatCard = ({ title, value, style, icon }) => {


    return (
        <View style={{...styles.card, ...style}}>

            <View style={styles.textContainer}>
                <Text style={{...styles.title,
                    fontFamily: "Quicksand600SemiBold", }}>{title}</Text>
                <Text style={{...styles.value,
                    fontFamily: "Quicksand700Bold",}}>{value}</Text>
            </View>
            <View style={{
                height: "100%",
                marginLeft: "-8%",
                alignItems: "center"
            }}>
                <Icon name={icon.name} size={22} color="#FFFFFF" style={styles.icon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9E9E9E', // Adjust the background color to match the image
        borderRadius: 10,
        padding: 15,
        margin: "2%",
        width: '40%', // Adjust as necessary
    },
    icon: {
    },
    textContainer: {
        width: "90%",
        height: "100%",
        flexDirection: 'column',
    },
    title: {
        fontSize: 15,
        color: '#F3F8FA', // Adjust the text color to match the image
        marginBottom: 5,
    },
    value: {
        fontSize: 20,
        fontFamily: "Quicksand600Bold",
        color: '#F3F8FA', // Adjust the text color to match the image
    },
});

export default StatCard;
