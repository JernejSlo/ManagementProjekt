import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DashboardUser from "../Components/Large/DashboardUser"
import SwitchView from "../Components/Small/SwitchView"
import Activities from "../Components/Large/Activities";
import {SafeAreaView} from "react-native-safe-area-context";
import {useFonts} from "@expo-google-fonts/magra";
import {useSelector} from "react-redux";
import {
    selectUser,
    selectActivities,
    selectLeaderboard,
    selectConnections,
    selectPastConnections,
    setActivities, setLeaderboard, selectTrainingPlan
} from "../Slices/navSlice";
import AppLoading from "expo-app-loading";
import Connections from "../Components/Large/Connections";
import Goals from '../Components/Large/Goals';
import goals from '../Components/TempValues/goals';
import {useNavigation} from "@react-navigation/native";


const Dashboard = () => {

    const user_ = useSelector(selectUser);
    const activities = useSelector(selectActivities);
    const connections_ = useSelector(selectConnections);
    const past_connections = useSelector(selectPastConnections);
    const trainingPlan_ = useSelector(selectTrainingPlan);
    const navigator = useNavigation()
    if (user_?.loggedIn === false){
        navigator.navigate("Login")
    }

    const [connections, setConnections] = useState(connections_)
    const [trainingPlan, setTrainingPlan] = useState(trainingPlan_)

    const [fontsLoaded,fontError] = useFonts({
        "Magra400Regular" : require("../assets/fonts/Magra-Regular.ttf"),
        "Magra700Bold" : require("../assets/fonts/Magra-Bold.ttf"),
        "Quicksand400Regular" : require("../assets/fonts/Quicksand-Regular.ttf"),
        "Quicksand600SemiBold" : require("../assets/fonts/Quicksand-SemiBold.ttf"),
        "Quicksand700Bold" : require("../assets/fonts/Quicksand-Bold.ttf"),
    });
    const [listId, setListId] = useState([{id: 0,name: "Activities"},{id: 1,name: "Goals"},{id: 2,name: "Connections"}])
    const [selected,setSelected] = useState(0)


    function renderComponent() {
        if (selected === 0) {
            return <Activities activities={activities} />;
        } else if (selected === 1) {
            return <Goals goals={goals}/>;
        } else {
            return <Connections connections={past_connections} />;
        }
    }

    if (!fontsLoaded){
        return <AppLoading></AppLoading>
    }
    else{
        return (
            <SafeAreaView style={styles.base_bg}>
                <View style={styles.container}>
                    <View style={styles.textWrapper}>
                        <Text style={[styles.leftText]}>
                            Dashboard
                        </Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={[styles.rightText]}>
                            MISSION JOGGER
                        </Text>
                    </View>
                </View>
                <DashboardUser user={user_} activities={activities}/>
                <SwitchView items={listId} func={(index) => setSelected(index)}/>
                {
                    renderComponent()
                }
            </SafeAreaView>
        );

    }
};

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: "3%",
        marginTop: "6%",
        marginBottom: "6%",
        alignSelf: "center",
        width: 300,
        height: 36,
        paddingLeft: 6,
        paddingRight: 6
    },leftText: {
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
    // Additional styles for flexbox approach
    textWrapper: {
        height: "100%",
        justifyContent: 'flex-end',
    },
    base_bg:{
        padding: 10,
        backgroundColor: "#FFF7E1",
        height: "100%"
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
    dashboardContent: {
        flex: 1,
        padding: 20,
    },
    activitySection: {
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    activityText: {
        fontSize: 16,
        marginBottom: 5,
    },
    infoSection: {
        flex: 1,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        width: 100,
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        flex: 1,
        fontSize: 16,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 1.2,
    }
});

export default Dashboard;