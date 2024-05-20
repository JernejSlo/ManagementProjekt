import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectPastConnections, setConnections, setPastConnections} from "../../Slices/navSlice";

const Connections = ({ id, connections, noAdd, update }) => {

    const navigator = useNavigation()
    const dispatch = useDispatch(); // Correct initialization of useDispatch

    const cons = useSelector(selectPastConnections);
    const [connections_,setConnections_] = useState(connections)
    function connectDevice(device, index) {
        let updatedConnections = [...connections_];
        let updatedConnectionsRemoved = [...connections_];
        let pastConnections = [...cons];

        if (device.connection === "Disconnected" || device.connection === "Press to connect") {
            if (device.connection === "Press to connect") {
                // Add the device to past connections
                pastConnections.push({ ...device, connection: "Connected" });

                // Remove the device from current connections
                updatedConnectionsRemoved = updatedConnectionsRemoved.filter((_, idx) => idx !== index);
                updatedConnections[index] = {
                    ...device,
                    connection: "Connected",
                };
                dispatch(setPastConnections(pastConnections));
                dispatch(setConnections(updatedConnectionsRemoved));
            } else {
                // Just update the connection status
                updatedConnections[index] = {
                    ...device,
                    connection: "Connected",
                };

                dispatch(setPastConnections(updatedConnections));
            }


            setConnections_(updatedConnections);
        }
    }

    return (
        <ScrollView style={{
            width: "84%",
            alignSelf: "center",
            padding: 2,
        }}>
            <View style={{
                width: "100%",
                flexDirection: "row",
                flexWrap: 'wrap',
            }}  >
                {
                    connections_.map((item, index) => (
                        <TouchableOpacity
                            key={Math.random()*100000}
                            style={{
                                margin: "2%",
                                backgroundColor: "#d1d1d1",
                                width: "46%",
                                aspectRatio: 1,
                                padding: 15,
                                borderRadius: 14,
                            }}
                            onPress={()=>{connectDevice(item,index)}}
                        >
                            <Image
                                style={{
                                    width: "80%",
                                    height: "80%",
                                    alignSelf: "center",
                                    resizeMode: "contain"
                                }}
                                source={item.img}/>
                            <Text style={{
                                marginTop: 4,
                                fontFamily: "Quicksand700Bold",
                                fontSize: 12,
                                color: 'rgba(64, 66, 66, 0.8)',
                            }}>
                                {item.title}
                            </Text>
                            <Text style={{
                                fontFamily: "Quicksand700Bold",
                                fontSize: 9,
                                color: 'rgba(64, 66, 66, 0.4)',
                            }}>
                                {item.connection}
                            </Text>
                        </TouchableOpacity>

                    ))
                }
            </View>
            {!noAdd?
                <TouchableOpacity style={{
                    alignSelf: "center",
                    margin: 20,
                }}
                                  onPress={() => {navigator.navigate("Connections")}}
                >
                    <Text style={{
                        fontFamily: "Quicksand700Bold",
                        fontSize: 16,
                        color: 'rgba(64, 66, 66, 0.8)',
                    }}>
                        ADD DEVICE
                    </Text>
                </TouchableOpacity>

                : <></>}
        </ScrollView>
    )

}


Connections.propTypes = {
    connections: PropTypes.array.isRequired,
};

export default Connections