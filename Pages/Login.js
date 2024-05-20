import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../api/auth';
import { selectUser } from '../Slices/navSlice';
import {SafeAreaView} from "react-native-safe-area-context";

export default function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (user?.loggedIn === false) {
            navigation.navigate('Login');
        }
    }, [user, navigation]);

    const navigateToRegister = () => {
        navigation.navigate('Register');
    };

    const handleInputChange = (name, value) => {
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <SafeAreaView style={styles.base_bg}>
            <Text  style={{
                alignSelf: "center",
                paddingBottom: 10,
                fontFamily: "Quicksand700Bold",
                fontSize: 28,
                width: "80%",
                marginRight: "10%",
                textAlign: "center",
                color: '#303E49',
            }}>
                LOGIN
            </Text>
            <View style={[styles.container]}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={loginData.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={loginData.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                    secureTextEntry
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handleLogin(loginData.email, loginData.password, dispatch);
                        navigation.navigate('Dashboard');
                    }}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={{
                    alignItems: "center"
                }}>
                    <Text style={styles.text}>
                        Haven't created an account yet?
                    </Text>
                    <TouchableOpacity onPress={navigateToRegister}>
                        <Text style={styles.linkText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: "3%",
        marginTop: "6%",
        marginBottom: "6%",
        alignSelf: "center",
        width: 300,
        padding: 20,
        borderRadius: 10,
    },
    leftText: {
        fontSize: 28,
        color: '#303E49',
        fontWeight: "bold",
        fontFamily: "Magra700Bold",
    },
    rightText: {
        fontSize: 14,
        color: '#303E49',
        fontWeight: "bold",
        fontFamily: "Magra700Bold",
        marginBottom: 3,
    },
    textWrapper: {
        height: "100%",
        justifyContent: 'flex-end',
    },
    base_bg: {
        padding: 10,
        backgroundColor: "#FFF7E1",
        height: "100%",
        justifyContent: 'center',
    },
    dashboardHeader: {
        height: 150,
        backgroundColor: '#008CBA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ef4444',
        marginBottom: 20,
        padding: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#ef4444',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: "Quicksand700Bold",
    },
    text: {
        color: 'black',
        fontFamily: "Quicksand600SemiBold",
        marginBottom: 10,
    },
    linkText: {
        fontFamily: "Quicksand700Bold",
        color: '#ef4444',
        fontWeight: 'bold',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 1.2,
    }
});
