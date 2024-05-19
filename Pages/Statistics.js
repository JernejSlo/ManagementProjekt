import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./Dashboard";
import {Dimensions, Text, View,ScrollView} from "react-native";
import NavigateAndTitle from "../Components/Small/NavigateAndTitle";
import WavyRectangle from "../Components/Small/WavyRectangle";
import ValuesInLine from "../Components/Small/ValuesInLine";
import React, {useState} from "react";
import SwitchView from "../Components/Small/SwitchView";
import Activities from "../Components/Large/Activities";
import BarChart from "../Components/Large/Statistics/BarChart";
import StatCard from "../Components/Small/Statistics/StatCard";
import {useFonts} from "@expo-google-fonts/magra";
import Legend from "../Components/Small/Statistics/Legend";

export default function Statistics({}){
    const { height: vh ,width: vw} = Dimensions.get('window');

    const [periods] = useState([
        {id: 0,name: "All time"},
        {id: 1,name: "This Month"},
        {id: 2,name: "Today"}
    ])

    function renderComponent() {
        if (selected === 0) {
            return <BarChart x={fakeData}/>;
        } else if (selected === 1) {
            return <BarChart x={fakeData}/>;
        } else {
            return <BarChart x={fakeData}/>;
        }
    }

    const [selected,setSelected] = useState(0)
    let fakeStats = [
        { id: 0, title: "Distance", value: "913.7 km", icon: { name: "walking", from: "FontAwesome5" } },
        { id: 1, title: "Duration", value: "110h", icon: { name: "hourglass-half", from: "FontAwesome5" } },
        { id: 2, title: "Calories", value: "55,020 kcal", icon: { name: "utensils", from: "FontAwesome5" } },
        { id: 3, title: "Avg speed", value: "8.1 km/h", icon: { name: "tachometer-alt", from: "FontAwesome5" } },
        { id: 4, title: "Weight loss", value: "5.2 kg", icon: { name: "weight", from: "FontAwesome5" } },
        { id: 5, title: "Rank", value: "33", icon: { name: "trophy", from: "FontAwesome5" } }
    ];
    let fakeTypes = [
        {text: "Individual Courses" , color: "#edd870"},
        {text: "Missed Training Plan" , color: "#ed6f70"},
        {text: "Completed Training Plan" , color: "#5de083"},
    ]
    let fakeData = [
        {   title: "Jan",
            data: [
                {color: "#edd870", value: 2, bottom: 11},
                {color: "#ed6f70", value: 3, bottom: 8},
                {color: "#5de083", value: 8, bottom: 0},
            ]
        },
        {   title: "Feb",
            data: [
                {color: "#edd870", value: 2, bottom: 15},
                {color: "#ed6f70", value: 3, bottom: 12},
                {color: "#5de083", value: 12, bottom: 0},
            ]
        },
        {   title: "Mar",
            data: [
                {color: "#edd870", value: 3, bottom: 18},
                {color: "#ed6f70", value: 3, bottom: 16},
                {color: "#5de083", value: 16, bottom: 0},
            ]
        },
        {   title: "Apr",
            data: [
                {color: "#edd870", value: 3, bottom: 16},
                {color: "#ed6f70", value: 6, bottom: 10},
                {color: "#5de083", value: 10, bottom: 0},
            ]
        },
        {   title: "May",
            data: [
                {color: "#edd870", value: 3, bottom: 7},
                {color: "#ed6f70", value: 2, bottom: 5},
                {color: "#5de083", value: 5, bottom: 0},
            ]
        },
        {   title: "Jun",
            data: [
                {color: "#edd870", value: 2, bottom: 13},
                {color: "#ed6f70", value: 4, bottom: 9},
                {color: "#5de083", value: 9, bottom: 0},
            ]
        },
        {   title: "Jul",
            data: [
                {color: "#edd870", value: 4, bottom: 18},
                {color: "#ed6f70", value: 10, bottom: 6},
                {color: "#5de083", value: 8, bottom: 0},
            ]
        },
        {   title: "Avg",
            data: [
                {color: "#edd870", value: 1, bottom: 4},
                {color: "#ed6f70", value: 1, bottom: 3},
                {color: "#5de083", value: 3, bottom: 0},
            ]
        },
        {   title: "Sep",
            data: [
                {color: "#edd870", value: 2, bottom: 10},
                {color: "#ed6f70", value: 1, bottom: 9},
                {color: "#5de083", value: 9, bottom: 0},
            ]
        },
        {   title: "Okt",
            data: [
                {color: "#edd870", value: 2, bottom: 20},
                {color: "#ed6f70", value: 2, bottom: 18},
                {color: "#5de083", value: 18, bottom: 0},
            ]
        },
        {   title: "Nov",
            data: [
                {color: "#edd870", value: 2, bottom: 19},
                {color: "#ed6f70", value: 3, bottom: 16},
                {color: "#5de083", value: 16, bottom: 0},
            ]
        },
        {   title: "Dec",
            data: [
                {color: "#edd870", value: 3, bottom: 14},
                {color: "#ed6f70", value: 3, bottom: 11},
                {color: "#5de083", value: 11, bottom: 0},
            ]
        },
    ]

    return (
        <SafeAreaView style={{...styles.base_bg, alignItems: "center"}}>
            <NavigateAndTitle title={"Statistics"}/>
            <SwitchView func={(index) => setSelected(index)} items={periods}/>
            <WavyRectangle
                contentStyle={{
                    alignItems: "center"
                }}
                topColor={"#CFEBFF"}
                bottomColor={"#89AFCA"}
                style={{width: vw*0.8, height: vh*0.26, marginTop: 0.01*vh,
                alignItems: "center", borderRadius: "13%"}}>
                {renderComponent()}
                <View style={{
                    marginTop: "-1.2%",
                }}>
                    <Legend types={fakeTypes} metadata={{typeDisplaySize: 12}}/>
                </View>
            </WavyRectangle>
            <ScrollView contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: "row",
                flexWrap: "wrap",
                paddingTop: 16,
            }}>
                {fakeStats.map((stat) => (
                    <StatCard key={stat.id} title={stat.title} style={{
                        width: vw*0.38,
                        height: vh*0.1,
                        backgroundColor: "#A1ADB6",
                        borderRadius: 0.07*vw
                    }} value={stat.value} icon={stat.icon} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )

}