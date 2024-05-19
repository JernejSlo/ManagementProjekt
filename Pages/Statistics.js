import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./Dashboard";
import {Dimensions, Text, View} from "react-native";
import NavigateAndTitle from "../Components/Small/NavigateAndTitle";
import WavyRectangle from "../Components/Small/WavyRectangle";
import ValuesInLine from "../Components/Small/ValuesInLine";
import React, {useState} from "react";
import SwitchView from "../Components/Small/SwitchView";
import Activities from "../Components/Large/Activities";
import BarChart from "../Components/Large/Statistics/BarChart";

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

    return (
        <SafeAreaView style={{...styles.base_bg, alignItems: "center"}}>
            <NavigateAndTitle title={"Statistics"}/>
            <SwitchView func={(index) => setSelected(index)} items={periods}/>
            <WavyRectangle
                contentStyle={{
                    alignItems: "center"
                }}
                style={{width: vw*0.8, height: vh*0.2, marginTop: 0.05*vh,
                alignItems: "center", borderRadius: "10%"}}>
                {renderComponent()}
            </WavyRectangle>
        </SafeAreaView>
    )

}