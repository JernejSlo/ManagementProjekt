import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import {useDispatch, useSelector} from "react-redux";
import {selectActivities, selectActivity, setActivities} from "../Slices/navSlice";
import {useNavigation} from "@react-navigation/native";
import NavigateAndTitle from "../Components/Small/NavigateAndTitle";

export default function CoursePage( ){

    const item = useSelector(selectActivity)

    const dispatch = useDispatch()
    const current = useSelector(selectActivities)
    const navigator = useNavigation()

    const courses = useSelector(selectActivities)

    function addCourse(){
        let toAdd = item
        const newValues = [
            {
                "title": "Calories b.",
                "value": "0"
            },
            {
                "title": "Time",
                "value": "0h"
            },
            {
                "title": "Repetitions",
                "value": "0"
            },
            {
                "title": "Level",
                "value": "0"
            }
        ];
        toAdd = {
            ...toAdd,
            added: true,
            values: newValues
        }
        let all = current
        all = [toAdd,...all]
        console.log(all)
        dispatch(setActivities(all))
        setIsAdded(true)
    }

    function checkIfCourseAdded(){
        for (const key in courses) {
            let course_ = courses[key]
            if (course_.title.toLowerCase() == item.title.toLowerCase()){
                return true
            }
        }
        return false
    }

    function checkIfCourseAddedVals(){
        for (const key in courses) {
            let course_ = courses[key]
            if (course_.title.toLowerCase() == item.title.toLowerCase()){
                return course_.values
            }
        }
        return item.values
    }

    const [vals, setVals] = useState(checkIfCourseAddedVals())

    const [isAdded, setIsAdded] = useState(checkIfCourseAdded())





    return (
        <SafeAreaView style={{
            padding: 10,
            backgroundColor: "#FFF7E1",
            height: "100%"
        }}>
            <NavigateAndTitle title={item.title} />

            <View style={{
                width: "90%",
                alignSelf: "center",
                height: "75%",
                marginTop: 10,
                backgroundColor: "rgba(255,255,255,0.4)",
                borderRadius: 20,
            }}>
                <Image style={{
                    width: "100%",
                    height: "40%",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }} source={item.bg}/>
                <Text style={{
                    margin: 20,
                    fontFamily: "Quicksand700Bold",
                    fontSize: 16,
                    color: '#3e4242'
                }}>
                    {item.description}
                </Text>
                <View style={{
                    marginLeft: 20,
                    marginRight: 20,
                    height: 2,
                    width: "80%",
                    backgroundColor: "rgba(214,214,214,0.3)",
                    alignSelf: "center",
                }}/>
                <View style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "10%",
                    paddingTop: "4%",
                    paddingBottom: "4%",
                }}>
                    {vals.map((val) => ((
                        <View
                            key={Math.random()*100000}
                            style={{
                            width: "45%",
                            aspectRatio: 1,
                            alignItems: "center",
                            margin: "2.5%",
                            backgroundColor: "#D1D1D1",
                            padding: 10,
                            borderRadius: 14,
                        }}>
                            <Text style={{
                                fontFamily: "Quicksand700Bold",
                                fontSize: 12,
                                color: '#fff'
                            }}>
                                {val.title}
                            </Text>
                            <Text style={{
                                fontFamily: "Quicksand700Bold",
                                fontSize: 20,
                                color: 'rgba(0,0,0,0.63)'
                            }}>
                                {val.value}
                            </Text>
                        </View>
                    )))}
                    <View style={{
                        width: "100%",
                        flex: 1,
                        padding: 5,
                        marginTop: 5,
                    }}>
                        <TouchableOpacity style={{
                            alignSelf: "center",
                            width: "80%",
                            backgroundColor: "#60bcda",
                            padding: 10,
                            borderRadius: 16,
                        }}
                        onPress={()=> {
                            isAdded ? navigator.navigate("CourseInProgress") : addCourse()
                        }}
                        >
                            <Text style={{
                                textAlign: "center",
                                fontSize: 20,
                                color: '#ffffff',
                                fontFamily: "Quicksand700Bold",
                            }}
                            >
                                {isAdded ? "Start" : "ADD COURSE"}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}
