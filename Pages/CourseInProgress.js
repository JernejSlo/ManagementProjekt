import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";
import {selectActivities, selectActivity, setActivities} from "../Slices/navSlice";
import {useNavigation} from "@react-navigation/native";
import ToggleSwitch from "../Components/Small/ToggleSwitch";
import NavigateAndTitle from "../Components/Small/NavigateAndTitle";

export default function CourseInProgress(){

    const item = useSelector(selectActivity)
    const navigator = useNavigation()
    const dispatch = useDispatch()
    const activities = useSelector(selectActivities)

    const [measures, setMeasures] = useState([
        {
            name: "TIME",
            value: 0, // This will be incremented each second
        },
        {
            name: "BPM",
            value: 120, // You can update this as needed
        },
        {
            name: "CALORIES BURNED",
            value: 0, // You can update this as needed
        },
    ]);

    const [stopped,setStopped] = useState(false)

    const handleToggleSwitch = (func) => {
        func(previousState => !previousState);
        // Additional logic when the switch is toggled
    };

    useEffect(() => {
        let interval;
        if (!stopped){
            interval = setInterval(() => {
                setMeasures(prevMeasures => {

                        let bpmChange = Math.floor(Math.random() * 4) - 2; // Random increment between 1 and 5

                        let newBPM = prevMeasures[1].value + bpmChange;
                        if (newBPM > 145){
                            newBPM = 143
                        }
                        else if (newBPM < 125){
                            newBPM = 125
                        }
                        // Update calories burned based on new BPM and time
                        // This is a simplified example and should be replaced with your actual calculation logic
                        const caloriesBurned = (prevMeasures[2].value + (newBPM / 1000));

                        return [
                            { name: "TIME", value: prevMeasures[0].value + 1 },
                            { name: "BPM", value: newBPM },
                            { name: "CALORIES BURNED", value: caloriesBurned }
                        ];

            });
        }, 1000);}

        return () => clearInterval(interval);
    }, [stopped]);

    function setNewValues(){
        let updatedActivities = [...activities]
        let all_vals = []
        let key_ = 0
        for (const key in activities) {
            if (activities[key].title.toLowerCase() == item.title.toLowerCase()){
                key_ = key
                let values = activities[key].values
                for (const val_key in values){
                    let value = values[val_key]
                    if (value.title == "Calories b."){
                        let val = parseInt(value.value);
                        val += measures[2].value
                        all_vals.push({
                            title: "Calories b.",
                            value: (val.toFixed(0)).toString()
                        })
                    }
                    else if (value.title == "Time"){
                        let val_ = value.value
                        let n = val_.length
                        let val = parseInt(value.value.slice(0,n));
                        val += (measures[0].value) / 3600;
                        all_vals.push({
                            title: "Time",
                            value: (val.toFixed(1)).toString()+"h"
                        })
                    }
                    else if (value.title == "Repetitions"){
                        let val = parseInt(value.value);
                        val += 1;
                        all_vals.push({
                            title: "Repetitions",
                            value: val.toString()
                        })
                    }
                    else if (value.title == "Level"){
                        let val = parseInt(value.value);
                        if ((measures[0].value) > 1000){
                            val += 1;
                        }
                        all_vals.push({
                            title: "Level",
                            value: val.toString()
                        })
                    }
                }
            }
        }
        updatedActivities[key_] = {
            ...updatedActivities[key_],
            values: all_vals
        }
        console.log(all_vals)
        console.log(updatedActivities[key_])

        dispatch(setActivities(updatedActivities))
        navigator.navigate("Dashboard")
    }


    const [realistic,setRealistic] = useState(false)
    const [competitive,setCompetitive] = useState(false)

    function makeSlider(text, val, func){
        return (
            <View style={{
                padding: 10,
                paddingTop: 2,
            }}
            key={Math.random()*1000000}
            >
                <Text style={{
                    textAlign: "center",
                    fontFamily: "Quicksand700Bold",
                    fontSize: 14,
                    color: 'rgba(186, 186, 186, 1)',
                }}>
                    {text}
                </Text>

                <View style={{
                    alignSelf: "center",
                    padding: 8,
                }}>
                    <ToggleSwitch  isEnabled={val} onToggle={() => {
                        handleToggleSwitch(func)
                    }}/>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            padding: 10,
            backgroundColor: "#FFF7E1",
            height: "100%"
        }}>
            <NavigateAndTitle title={item.title}/>
            <View style={{
                alignSelf: "center",
                flex: 0.9,
                alignItems: "center",
                justifyContent: "center",
            }}>
                {
                    measures.map((item) => (
                        (
                            <View
                                key={Math.random()*10000}
                                style={{
                                alignItems: "center",
                            }}>
                                <Text style={{

                                    fontFamily: "Quicksand700Bold",
                                    fontSize: 14,
                                    color: 'rgba(186, 186, 186, 1)',
                                }}>
                                    {item.name}
                                </Text>
                                <Text style={{

                                    fontFamily: "Quicksand700Bold",
                                    fontSize: 28,
                                    color: 'rgba(62, 66, 66, 1)',
                                }}>
                                    {item.value.toFixed(0)}
                                </Text>
                                <View style={{
                                    width: 200,
                                    height: 2,
                                    backgroundColor:"rgba(214,214,214,0.3)",
                                    marginTop: 8,
                                    marginBottom: 30,
                                }}>

                                </View>
                            </View>
                        )
                    ))
                }

                <View style={{
                    flexDirection: "row",

                }}>
                    {makeSlider("Competitive",competitive,() => setCompetitive(!competitive))}
                    {makeSlider("Realistic",realistic,() => setRealistic(!realistic))}
                </View>

            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "60%",
                alignSelf: "center",
            }}>
                <TouchableOpacity style={{
                    alignSelf: "center",
                    width: "45%",
                    backgroundColor: !stopped ? "#60bcda" : "#7ee282",
                    padding: 10,
                    borderRadius: 16,
                }}
                    onPress={() => {
                        stopped? setStopped(false):setStopped(true)
                    }}
                >
                    <Text style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: '#ffffff',
                        fontFamily: "Quicksand700Bold",
                    }}>
                        {stopped? "RESUME" : "PAUSE"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    alignSelf: "center",
                    width: "45%",
                    backgroundColor: "#da6060",
                    padding: 10,
                    borderRadius: 16,
                }}
                onPress={()=>{setNewValues()}}
                >
                    <Text style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: '#ffffff',
                        fontFamily: "Quicksand700Bold",
                    }}>
                        STOP
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}