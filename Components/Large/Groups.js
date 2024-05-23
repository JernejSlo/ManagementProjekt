import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useFonts } from "@expo-google-fonts/magra";
import AppLoading from "expo-app-loading";

export default function Groups() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [allGroups, setAllGroups] = useState([]);
    const [userGroups, setUserGroups] = useState([]);
    const [newGroupName, setNewGroupName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data
    useEffect(() => {
        const fetchedAllGroups = [
            { id: 1, name: "Group 1" },
            { id: 2, name: "Group 2" },
            { id: 3, name: "Group 3" },
            { id: 4, name: "Group 4" },
            { id: 5, name: "Group 5" },
        ];
        const fetchedUserGroups = [
            { id: 2, name: "Group 2" },
            { id: 3, name: "Group 3" },
        ];

        setAllGroups(fetchedAllGroups);
        setUserGroups(fetchedUserGroups);
    }, []);

    const handleJoinGroup = (groupId) => {
        const group = allGroups.find(group => group.id === groupId);
        if (group) {
            setUserGroups([...userGroups, group]);
        }
    };

    const handleCreateGroup = () => {
        if (newGroupName.trim()) {
            const newGroup = { id: allGroups.length + 1, name: newGroupName };
            setAllGroups([...allGroups, newGroup]);
            setUserGroups([...userGroups, newGroup]);
            setNewGroupName('');
        }
    };

    const handleNavigateToGroup = (groupId) => {
        navigation.navigate('GroupPage', { groupId });
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

    // Filter groups based on search query
    const filteredGroups = allGroups.filter(group =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.base_bg}>
            <View style={styles.container}>

                

                {/* Section to view user's groups */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Your Groups</Text>
                    <FlatList
                        data={userGroups}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.groupContainer} onPress={() => handleNavigateToGroup(item.id)}>
                                <Text style={styles.groupName}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Section to browse all groups */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Browse</Text>
                    <TextInput
                        placeholder="Search..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        style={styles.searchInput}
                    />
                    <FlatList
                        data={filteredGroups}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.groupContainer}>
                                <Text style={styles.groupName}>{item.name}</Text>
                                <Button title="Join Group" onPress={() => handleJoinGroup(item.id)} />
                            </View>
                        )}
                    />
                </View>

                {/* Section to create a new group */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Create a New Group</Text>
                    <TextInput
                        placeholder="Group Name"
                        value={newGroupName}
                        onChangeText={setNewGroupName}
                        style={styles.input}
                    />
                    <Button title="Create Group" onPress={handleCreateGroup} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base_bg: {
        padding: 10,
        backgroundColor: "#FFF7E1",
        height: "100%"
    },
    container: {
        margin: "3%",
        marginTop: "6%",
        marginBottom: "6%",
        paddingHorizontal: 10,
        flex: 1,
    },
    title: {
        fontSize: 28,
        color: '#303E49',
        fontWeight: "bold",
        fontFamily: "Magra700Bold",
        marginBottom: 20
    },
    section: {
        marginBottom: 20,
        flex: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: "Magra700Bold",
        marginBottom: 10,
    },
    groupContainer: {
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
    groupName: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: "Quicksand600SemiBold",
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontFamily: "Quicksand400Regular",
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontFamily: "Quicksand400Regular",
    }
});
