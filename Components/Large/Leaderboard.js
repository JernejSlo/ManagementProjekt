import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import PropTypes from "prop-types";
import Activities from "./Activities";
import ValuesInLine from "../Small/ValuesInLine"
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {setOtherUser} from "../../Slices/navSlice";
import {loadedImages} from "../TempValues/Images";

const Leaderboard = ({ leaderboard }) => {

    const dispatch = useDispatch()
    const navigator = useNavigation()

    function changeUserAndNavigate(item){
        dispatch(setOtherUser(item))
        navigator.navigate("OtherUserDashboard")
    }


    function calculateValues(activities, user){

        let totalTime = 0
        for (const i in activities) {
            totalTime += activities[i].time
        }
        return ([
            {
                "title": "Time",
                "value": totalTime
            },
            {
                "title": "Activities",
                "value": activities.length
            },
            {
                "title": "Rank",
                "value": user.rank
            }
        ])
    }

    const styles = StyleSheet.create({
        top: {
            fontFamily: "Quicksand700Bold",
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.4)',
        },
        bottom: {
            fontFamily: "Quicksand700Bold",
            fontSize: 24,
            color: 'rgba(255, 255, 255, 1)',
        }
    })


    return (

        <View>
            <Text style={{
                alignSelf: "center",
                paddingBottom: 10,
                fontFamily: "Quicksand700Bold",
                fontSize: 16,
                color: 'rgba(107, 107, 107, 1)',
            }}>
                Most active in your city
            </Text>
            <ScrollView style={{
                width: "80%",
                alignSelf: "center",
                height: "100%"
            }}>
                {leaderboard.map((item, index) => {
                    let vals = calculateValues(item.activities,item)
                    return (
                        <TouchableOpacity key={Math.random() * 100000} style={{
                            flexDirection: "row",
                            backgroundColor: "#d1d1d1",
                            padding: 8,
                            borderRadius: 22,
                            height: 82,
                            marginBottom: 7,

                        }}
                                          onPress={()=> {
                                              changeUserAndNavigate(item)
                                          }}
                        >
                            <ImageBackground source={require("../../assets/bgWavyLight.png")} style={{
                                height: 66,
                                width: 66,
                                padding: 3,
                                borderRadius:10
                            }}>
                                <Image style={{
                                    height: 60,
                                    width: 60,
                                    padding: 3,
                                    marginRight: 8,
                                    resizeMode: "contain"
                                }} source={loadedImages[item.img]}/>
                            </ImageBackground>

                            <View style={{
                                justifyContent: "center",
                                paddingLeft: 5,
                                alignItems: "center",
                                width: "80%"
                            }}>
                                <ValuesInLine vals={vals} texts={styles}
                                              paddinga={2}
                                              paddingl={0}
                                              paddingr={0}
                                              margint={10}/>
                            </View>
                        </TouchableOpacity>
                    )
                })
                }
            </ScrollView>
        </View>
    )

}


Activities.propTypes = {
    leaderboard: PropTypes.array.isRequired,
};

export default Leaderboard