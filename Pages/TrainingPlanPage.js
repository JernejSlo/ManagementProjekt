import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../Slices/navSlice';
import NavigateAndTitle from '../Components/Small/NavigateAndTitle';
import { styles } from './Dashboard';
import Activities from '../Components/Large/Activities';
import {days} from "../Components/TempValues/days";




export default function TrainingPlanPage() {
    let user = useSelector(selectUser);


    const dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    return (
        <SafeAreaView style={{ ...styles.base_bg, alignItems: 'center' }}>
            <NavigateAndTitle title={`${user.name}'s Training Plan`} />

            <ScrollView
                style={{
                    width: '90%',
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    borderRadius: 20,
                }}
            >
                <Text style = {{
                    fontSize: 15,
                    fontFamily: 'Quicksand700Bold',
                    color: '#6b6b6b',
                    marginTop: 20,
                    marginLeft: 20,
                
                }}>TODAY</Text>

                <Text style = {{
                    fontSize: 20,
                    fontFamily: 'Quicksand700Bold',
                    color: '#3E4242',
                    marginLeft: 20,

                
                }}>MONDAY</Text>

                {
                    dayNames.map(((day, index) => {
                        let values = days.filter(item => item.day === day)
                        if (values.length === 0){
                            return
                        }
                        return (
                            <View key={index} style={{
                                width: "107%",
                            }}>

                                <Text style = {{
                                    fontSize: 15,
                                    fontFamily: 'Quicksand700Bold',
                                    color: '#3E4242',
                                    marginTop: 20,
                                    marginLeft: 20,

                                }}>{day.toUpperCase()}</Text>

                                <View style={{
                                    marginLeft: "-6.5%",
                                    marginTop: 10,
                                }}>
                                    <Activities activities={values}/>
                                </View>


                                <View style={{
                                    width: '82%',
                                    height: 1,
                                    backgroundColor: '#D6D6D6',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center', // This will horizontally center the view
                                    marginLeft: 20,
                                }}></View>


                            </View>
                        )
                    }))
                }



            </ScrollView>



            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 20 }}>
                <TouchableOpacity
                    style={{
                        width: '45%',
                        height: 50,
                        backgroundColor: '#60BCDA',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', textAlign: "center", fontSize: 20, fontFamily: 'Quicksand700Bold' }}>CUSTOMIZE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '45%',
                        height: 50,
                        backgroundColor: '#60DA82',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlignVertical: 'center', // Center text vertically
                        textAlign: 'center', // Center text horizontally
                    }}
                >
                    <Text style={{ color: 'white', textAlign: "center", fontSize: 20, fontFamily: 'Quicksand700Bold' }}>
                        GENERATE PLAN
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
