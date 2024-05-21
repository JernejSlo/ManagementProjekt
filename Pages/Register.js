import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { handleSignup } from '../api/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterPage() {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "", // Added gender field
        weight: "", // Added age field
        goal_weight: ""
    });
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const navigateToLogin = () => {
        navigation.navigate('Login');
    };

    const handleInputChange = (name, value) => {
        setRegisterData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <SafeAreaView style={styles.base_bg}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} acessible={false}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{
                        alignSelf: "center",
                        paddingBottom: 10,
                        fontFamily: "Quicksand700Bold",
                        fontSize: 28,
                        width: "80%",
                        marginRight: "10%",
                        textAlign: "center",
                        color: '#303E49',
                    }}>
                        REGISTER
                    </Text>
                    <View style={[styles.container]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            value={registerData.name}
                            onChangeText={(text) => handleInputChange('name', text)}
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={registerData.email}
                            onChangeText={(text) => handleInputChange('email', text)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={registerData.password}
                            onChangeText={(text) => handleInputChange('password', text)}
                            secureTextEntry
                        />
                        {/* Gender Selection */}
                        <Text style={styles.label}>Select Gender:</Text>
                        <View style={styles.genderContainer}>
                            <TouchableOpacity
                                style={[styles.genderButton, registerData.gender === 'Male' && styles.selectedGender]}
                                onPress={() => handleInputChange('gender', 'Male')}
                            >
                                <Text style={[styles.genderButtonText, registerData.gender === 'Male' && styles.selectedGenderButtonText]}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.genderButton, registerData.gender === 'Female' && styles.selectedGender]}
                                onPress={() => handleInputChange('gender', 'Female')}
                            >
                                <Text style={[styles.genderButtonText, registerData.gender === 'Female' && styles.selectedGenderButtonText]}>
                                    Female</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.genderButton, registerData.gender === 'Other' && styles.selectedGender]}
                                onPress={() => handleInputChange('gender', 'Other')}
                            >
                                <Text style={[styles.genderButtonText, registerData.gender === 'Other' && styles.selectedGenderButtonText]}>Other</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Age Input */}
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <TextInput
                                style={{...styles.input, width: "45%"}}
                                placeholder="Weight"
                                value={registerData.age}
                                onChangeText={(text) => handleInputChange('weight', text)}
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={{...styles.input, width: "45%"}}
                                placeholder="Goal weight"
                                value={registerData.age}
                                onChangeText={(text) => handleInputChange('goal_weight', text)}
                                keyboardType="numeric"
                            />

                        </View>
                        {/* Handle sign up */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleSignup(registerData, dispatch, navigation);
                            }}
                        >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.text}>Already have an account?</Text>
                            <TouchableOpacity onPress={navigateToLogin}>
                                <Text style={styles.linkText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    genderButton: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: '#C0C0C0FF',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    selectedGender: {
        backgroundColor: '#ef4444',
        borderColor: '#ef4444',
        color: "#fff",
    },
    genderButtonText: {
        color: "#c0c0c0",
        fontFamily: "Quicksand700Bold",
    },
    selectedGenderButtonText: {
        color: "#fff",
        fontFamily: "Quicksand700Bold",
    },
    label: {
        fontFamily: "Quicksand700Bold",
        fontSize: 16,
        color: '#303E49',
        marginBottom: 5,
    },
    linkText: {
        fontFamily: "Quicksand700Bold",
        color: '#ef4444',
        fontWeight: 'bold',
    },
});
