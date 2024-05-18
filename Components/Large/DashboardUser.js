import React, {useCallback, useState} from 'react';
import {View, Text,StyleSheet, FlatList, Button,ImageBackground,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import ValuesInLine from "../Small/ValuesInLine";
import {useNavigation} from "@react-navigation/native";

export default function DashboardUser({id, user, activities}){

    function calculateValues(){

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


    const [vals,setVals] = useState(calculateValues())

    const styles = StyleSheet.create({
        backgroundContainer:{
            width: 310,
            height: 310,
            alignSelf: "center",
            alignItems: "center",
            padding: 20,
        },
        icon: {
            width: 120,
            height: 120
        },
        textContainer:{

        },
        tT:{
            paddingTop: 10,
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Quicksand700Bold",
            color: "white"
        },
        tB:{
            fontSize: 11,
            fontFamily: "Quicksand600Bold",
            textAlign: "center",
            color: "white"
        },
        browseContainer:{
            height: 20,
        },
        top: {
            fontFamily: "Quicksand700Bold",
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.4)',
        },
        bottom: {
            fontFamily: "Quicksand700Bold",
            fontSize: 18,
            color: 'rgba(255, 255, 255, 1)',
        }
    })

    let navigator = useNavigation()

    return (
        <ImageBackground
                source={require('../../assets/bgWavy.png')}
                style={styles.backgroundContainer}
                resizeMode="cover" // or 'contain', 'stretch', etc.
            >
            <View style={{
                alignSelf: "flex-end",
            }}>
                <TouchableOpacity onPress={() => navigator.navigate("Browse")}>
                    <Icon name="search" size={28} color="#FFF" />
                </TouchableOpacity>
            </View>
            <Image style={styles.icon} source={user.img}/>
            <View style={styles.textContainer}>
                <Text style={styles.tT}>{user.name}</Text>
                <Text style={styles.tB}>{user.location}</Text>
            </View>
            <ValuesInLine vals={vals} color={"rgba(123, 143, 152, 0.45)"} texts={styles}
                          paddinga={14}
                          paddingl={20}
                          paddingr={20}
                          margint={10} />
        </ImageBackground>
    )

}

