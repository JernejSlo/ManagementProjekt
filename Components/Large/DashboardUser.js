import React, {useCallback, useState} from 'react';
import {View, Text,StyleSheet, FlatList, Button,ImageBackground,Image,TouchableOpacity} from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import IoniIcon from "react-native-vector-icons/Ionicons"
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
            flexDirection: "row",
            display: "flex",
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

    let [sideButtons] = useState([
        {iconName: "search", navigateTo: "Browse", from: "mui"},
        {iconName: "trophy", navigateTo: "Leaderboard", from: "io"},
        {iconName: "people", navigateTo: "Groups", from: "mui"},
        {iconName: "bar-chart", navigateTo: "Statistics", from: "mui"},
    ])

    function renderIcon(item) {
        if (item.from === "mui"){
            return(<MaterialIcon name={item.iconName} size={28} color="#FFF" />)
        }
        else if (item.from === "io"){
            return (
                <IoniIcon  name={item.iconName} size={26} color="#FFF" />
            )
        }
    }

    return (
        <ImageBackground
                source={require('../../assets/bgWavy.png')}
                style={styles.backgroundContainer}
                resizeMode="cover"
            >
            <View style={{
                alignSelf: "center",
                alignItems: "center",
                width: "80%",
                marginLeft: "10%",
            }}>
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
            </View>
            <View style={{
                alignSelf: "flex-end",
                height: "100%",
                paddingTop: 10,
                width: "10%",
            }}>
                {
                    sideButtons.map((item,index) => {
                        return (
                            <TouchableOpacity style={{
                                paddingBottom: 1,
                            }} key={index} onPress={() => navigator.navigate(item.navigateTo)}>
                                {renderIcon(item)}
                            </TouchableOpacity>
                        )
                    })
                }
            </View>


        </ImageBackground>
    )

}

