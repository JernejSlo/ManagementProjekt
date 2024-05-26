import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchBar from "../Components/Small/SearchBar";
import SwitchView from "../Components/Small/SwitchView";
import {useNavigation} from "@react-navigation/native";
import Connections from "../Components/Large/Connections";
import {useDispatch, useSelector} from "react-redux";
import {selectConnections, selectPastConnections} from "../Slices/navSlice";

export default function () {

    const navigator = useNavigation()

    const new_devices = useSelector(selectConnections)
    const past_devices = useSelector(selectPastConnections)



    return (
        <SafeAreaView style={{
            padding: 10,
            backgroundColor: "#FFF7E1",
            height: "100%"
        }}>
            <View style={{
                flexDirection: "row"
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
                    Connected Devices
                </Text>
            </View>
            <View style={{
                alignSelf: "center",
                width: "100%",
                height: "100%",
                alignItems: "center"
            }}>
                <Text style={{
                    padding: 20,
                    textAlign: "center",
                    fontFamily: "Quicksand700Bold",
                    fontSize: 18,
                    color: 'rgba(107, 107, 107, 1)',
                }}>
                    New Devices
                </Text>
                <Connections connections={new_devices} noAdd={true}/>
                <View style={{
                    marginTop: 30,
                    width: "80%",
                    height: 2,
                    backgroundColor: "rgba(255,255,255,0.4)"
                }}>

                </View>
                <Text style={{
                    padding: 20,
                    textAlign: "center",
                    fontFamily: "Quicksand700Bold",
                    fontSize: 18,
                    color: 'rgba(107, 107, 107, 1)',
                }}>
                    Past Devices
                </Text>
                <Connections connections={past_devices} noAdd={true} update={true}/>
            </View>
        </SafeAreaView>
    )

}