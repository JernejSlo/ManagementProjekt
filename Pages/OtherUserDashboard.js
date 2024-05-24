import React, {useState} from 'react';import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import DashboardUser from "../Components/Large/DashboardUser"
import SwitchView from "../Components/Small/SwitchView"
import Activities from "../Components/Large/Activities";
import Leaderboard from "../Components/Large/Leaderboard"
import {SafeAreaView} from "react-native-safe-area-context";
import {Magra_400Regular,Magra_700Bold, useFonts} from "@expo-google-fonts/magra";
import {useSelector} from "react-redux";
import {
    selectUser,
    selectActivities,
    selectLeaderboard,
    selectConnections,
    selectPastConnections,
    setActivities, setLeaderboard, selectOtherUser
} from "../Slices/navSlice";
import AppLoading from "expo-app-loading";
import Connections from "../Components/Large/Connections";
import Icon from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";



const OtherUserDashboard = () => {

    const user_ = useSelector(selectOtherUser);

    const navigator = useNavigation()

    const [user, setUser] = useState(user_)
    const [activities, setActivities] = useState(user.activities)

    const [fontsLoaded,fontError] = useFonts({
        "Magra400Regular" : require("../assets/fonts/Magra-Regular.ttf"),
        "Magra700Bold" : require("../assets/fonts/Magra-Bold.ttf"),
        "Quicksand400Regular" : require("../assets/fonts/Quicksand-Regular.ttf"),
        "Quicksand600SemiBold" : require("../assets/fonts/Quicksand-SemiBold.ttf"),
        "Quicksand700Bold" : require("../assets/fonts/Quicksand-Bold.ttf"),
    });
    const [listId, setListId] = useState([{id: 0,name: "Activities"},{id: 1,name: "Leaderboard"},{id: 2,name: "Connections"}])
    const [selected,setSelected] = useState(0)
    const styles = StyleSheet.create({
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
        }
    });

    function renderComponent() {
        if (selected === 0) {
            return <Activities activities={activities} />;
        }
    }

    if (!fontsLoaded){
        return <AppLoading></AppLoading>
    }
    else{
        return (
            <SafeAreaView style={styles.base_bg}>
                <View style={{
                    flexDirection: "row",
                    marginBottom: "8%",
                }}>
                    <TouchableOpacity style={{
                        width: "10%"
                    }}
                                      onPress={()=>{navigator.goBack()}}
                    >
                        <Icon name="chevron-left" size={40} color="#000" />
                    </TouchableOpacity>
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
                        {user.name}'s Profile
                    </Text>
                </View>
                <DashboardUser user={user} activities={activities}/>
                <SwitchView items={listId} func={(index) => setSelected(index)}/>
                {
                    renderComponent()
                }
            </SafeAreaView>
        );

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
});

export default OtherUserDashboard;