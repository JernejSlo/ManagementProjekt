
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./Dashboard";
import {Dimensions, Text, View,ScrollView} from "react-native";
import NavigateAndTitle from "../Components/Small/NavigateAndTitle";
import WavyRectangle from "../Components/Small/WavyRectangle";
import React, {useState} from "react";
import BarChart from "../Components/Large/Statistics/BarChart";
import StatCard from "../Components/Small/Statistics/StatCard";
import {useSelector} from "react-redux";
import {selectUser} from "../Slices/navSlice";

export default function TrainingPlanPage({}){
    let user = useSelector(selectUser);
    return (
        <SafeAreaView style={{...styles.base_bg, alignItems: "center"}}>
            <NavigateAndTitle title={`${user.name}'s Training Plan`} />
        </SafeAreaView>
    );
}
