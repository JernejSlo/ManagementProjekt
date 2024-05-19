
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./Dashboard";
import {Dimensions, Text, View,ScrollView} from "react-native";
import NavigateAndTitle from "../Components/Small/NavigateAndTitle";
import WavyRectangle from "../Components/Small/WavyRectangle";
import React, {useState} from "react";
import BarChart from "../Components/Large/Statistics/BarChart";
import StatCard from "../Components/Small/Statistics/StatCard";

export default function TrainingPlanPage({}){
    return (
        <SafeAreaView style={{...styles.base_bg, alignItems: "center"}}>
            <Text style={{...styles.title, marginTop: 20}}>Training Plan</Text>
        </SafeAreaView>
    );
}
