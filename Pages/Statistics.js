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

export default function Statistics({}){
    const { height: vh ,width: vw} = Dimensions.get('window');

    const [periods] = useState([
        {id: 0,name: "All time"},
        {id: 1,name: "This Month"},
        {id: 2,name: "Today"}
    ])

    function renderComponent() {
        if (selected === 0) {
            return <BarChart/>;
        } else if (selected === 1) {
            return <BarChart/>;
        } else {
            return <BarChart/>;
        }
    }

    const [selected,setSelected] = useState(0)
    let fakeStats = [
        { id: 0, title: "Distance", value: "913.7 km", icon: { name: "path", from: "FontAwesome5" } },
        { id: 1, title: "Duration", value: "110h", icon: { name: "hourglass-half", from: "FontAwesome5" } },
        { id: 2, title: "Calories", value: "55,020 kcal", icon: { name: "utensils", from: "FontAwesome5" } },
        { id: 3, title: "Avg speed", value: "8.1 km/h", icon: { name: "tachometer-alt", from: "FontAwesome5" } },
        { id: 4, title: "Weight loss", value: "5.2 kg", icon: { name: "weight", from: "FontAwesome5" } },
        { id: 5, title: "Rank", value: "33", icon: { name: "trophy", from: "FontAwesome5" } }
    ];

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
                style={{width: vw*0.8, height: vh*0.2, marginTop: 0.05*vh,
                alignItems: "center", borderRadius: "10%"}}>
                {renderComponent()}
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