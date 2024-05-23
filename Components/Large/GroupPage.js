import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "@expo-google-fonts/magra";
import AppLoading from "expo-app-loading";

const mockUsers = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
];

const mockSchedule = {
    Monday: "10:00 AM - 12:00 PM",
    Tuesday: "1:00 PM - 3:00 PM",
    Wednesday: "2:00 PM - 4:00 PM",
    Thursday: "10:00 AM - 12:00 PM",
    Friday: "1:00 PM - 3:00 PM",
    Saturday: "Off",
    Sunday: "Off",
};

export default function GroupPage() {
    const navigation = useNavigation();
    const route = useRoute();
    const { groupId } = route.params;

    const [users, setUsers] = useState([]);
    const [schedule, setSchedule] = useState({});
    const [editing, setEditing] = useState(false);
    const [newSchedule, setNewSchedule] = useState({ ...mockSchedule });

    useEffect(() => {
        setUsers(mockUsers); 
        setSchedule(mockSchedule); 
    }, [groupId]);

    const handleEditToggle = () => {
        setEditing(!editing);
        if (editing) {
            setSchedule(newSchedule);
        }
    };

    const handleScheduleChange = (day, time) => {
        setNewSchedule({ ...newSchedule, [day]: time });
    };

    const [fontsLoaded] = useFonts({
        "Magra400Regular": require("../../assets/fonts/Magra-Regular.ttf"),
        "Magra700Bold": require("../../assets/fonts/Magra-Bold.ttf"),
        "Quicksand400Regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
        "Quicksand600SemiBold": require("../../assets/fonts/Quicksand-SemiBold.ttf"),
        "Quicksand700Bold": require("../../assets/fonts/Quicksand-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.base_bg}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>Group {groupId}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Back" onPress={() => navigation.goBack()} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Users</Text>
                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.userContainer}>
                                <Text style={styles.userName}>{item.name}</Text>
                            </View>
                        )}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Schedule</Text>
                    <Button title={editing ? "Save" : "Edit"} onPress={handleEditToggle} />
                    {Object.keys(schedule).map((day) => (
                        <View key={day} style={styles.scheduleRow}>
                            <Text style={styles.scheduleDay}>{day}:</Text>
                            {editing ? (
                                <TextInput
                                    style={styles.scheduleInput}
                                    value={newSchedule[day]}
                                    onChangeText={(text) => handleScheduleChange(day, text)}
                                />
                            ) : (
                                <Text style={styles.scheduleTime}>{schedule[day]}</Text>
                            )}
                        </View>
                    ))}
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Plans" onPress={() => navigation.navigate('Plans', { groupId })} />
                    <Button title="Statistics" onPress={() => navigation.navigate('Statistics', { groupId })} />
                    <Button title="Leave Group" onPress={() => navigation.goBack()} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base_bg: {
        flex: 1,
        backgroundColor: "#FFF7E1",
    },
    header: {
        padding: 20,
        backgroundColor: "#303E49",
    },
    title: {
        fontSize: 28,
        color: '#FFF7E1',
        fontWeight: "bold",
        fontFamily: "Magra700Bold",
        textAlign: "center",
    },
    section: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: "Magra700Bold",
        marginBottom: 10,
    },
    userContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 1.2,
    },
    userName: {
        fontSize: 16,
        fontFamily: "Quicksand600SemiBold",
    },
    scheduleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 1.2,
    },
    scheduleDay: {
        fontSize: 16,
        fontFamily: "Quicksand600SemiBold",
    },
    scheduleTime: {
        fontSize: 16,
        fontFamily: "Quicksand400Regular",
    },
    scheduleInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        width: '50%',
        fontFamily: "Quicksand400Regular",
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
