import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../Slices/navSlice';
import NavigateAndTitle from '../Components/Small/NavigateAndTitle';
import { styles } from './Dashboard';

export default function TrainingPlanPage() {
    let user = useSelector(selectUser);

    return (
        <SafeAreaView style={{ ...styles.base_bg, alignItems: 'center' }}>
            <NavigateAndTitle title={`${user.name}'s Training Plan`} />

            <View
                style={{
                    width: '90%',
                    height: '70%',
                    backgroundColor: '#F9EBDC',
                    borderRadius: 20,
                }}
            ></View>

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
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Quicksand700Bold' }}>CUSTOMIZE</Text>
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
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Quicksand700Bold' }}>
                        GENERATE  NEW PLAN
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
