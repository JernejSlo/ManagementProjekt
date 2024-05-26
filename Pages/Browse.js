import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons"
import SwitchView from "../Components/Small/SwitchView";
import Activities from "../Components/Large/Activities";
import SearchBar from "../Components/Small/SearchBar";
import {useNavigation} from "@react-navigation/native";
import NavigateAndTitle from "../Components/Small/NavigateAndTitle";
import {supabase} from "../supbase";

export const fetchAndCategorizeData = async () => {
    try {
        // Fetch activities
        const { data: activities, error: activitiesError } = await supabase
            .from('activities') // Replace with your activities table name
            .select('*');

        if (activitiesError) {
            throw activitiesError;
        }

        // Fetch activity values
        const { data: activityValues, error: activityValuesError } = await supabase
            .from('activity_values') // Replace with your activity values table name
            .select('*');

        if (activityValuesError) {
            throw activityValuesError;
        }

        // Initialize variables for each type
        const missions = [];
        const trails = [];
        const trainings = [];

        // Categorize data based on the `type` value and attach values
        activities.forEach((item) => {
            // Find matching values for the activity
            const values = activityValues.filter(value => value.activity_id === item.id);
            item.values = values;

            switch (item.type) {
                case 'mission':
                    missions.push(item);
                    break;
                case 'trail':
                    trails.push(item);
                    break;
                case 'training':
                    trainings.push(item);
                    break;
                default:
                    console.warn(`Unknown type: ${item.type}`);
            }
        });


        return { missions, trails, trainings };
    } catch (error) {
        console.error('Error fetching data from Supabase:', error);
        return { missions: [], trails: [], trainings: [] };
    }
};


export default function Browse(){

    const [trails_,setTrails_] = useState([])
    const [missions_,setMissions_] = useState([])
    const [trainings_,setTrainings_] = useState([])

    const [trails_og,setTrails_og] = useState([])
    const [missions_og,setMissions_og] = useState([])
    const [trainings_og,setTrainings_og] = useState([])


    useEffect(() => {
        const getData = async () => {
            const { missions, trails, trainings } = await fetchAndCategorizeData();

            setMissions_og(sortByPopularity(missions));
            setTrails_og(sortByPopularity(trails).slice(0,4));
            setTrainings_og(sortByPopularity(trainings));

            setMissions_(sortByPopularity(missions));
            setTrails_(sortByPopularity(trails).slice(0,4));
            setTrainings_(sortByPopularity(trainings));
        };

        getData();
    }, []);

    const [listId, setListId] = useState([{id: 0,name: "Trails"},{id: 1,name: "Missions"},{id: 2,name: "Training"}])
    const [selected,setSelected] = useState(0)

    const [search_,setSearch_] = useState("")

    function sortByPopularity(list) {
        // Use the Array.sort method to sort the list by the 'downloads' value
        list.sort((item1, item2) => {
            const downloads1 = parseInt(item1.values.find(value => value.title === "Downloads").value);
            const downloads2 = parseInt(item2.values.find(value => value.title === "Downloads").value);

            // Sort in descending order (higher downloads first)
            return downloads2 - downloads1;
        });

        return list;
    }

    function renderComponent() {
        if (selected === 0) {
            return <Activities activities={trails_} />;
        } else if (selected === 1) {
            return <Activities activities={missions_} />;
        } else {
            return <Activities activities={trainings_} />;
        }
    }



    function filterAll(text){
        if (text.toLowerCase() == "all" || text == "*"){
            setTrails_(sortByPopularity(searchItems("",trails_og)))
            setMissions_(sortByPopularity(searchItems("",missions_og)))
            setTrainings_(sortByPopularity(searchItems("",trainings_og)))
        }else if (text != "") {
            setTrails_(sortByPopularity(searchItems(text, trails_og)))
            setMissions_(sortByPopularity(searchItems(text, missions_og)))
            setTrainings_(sortByPopularity(searchItems(text, trainings_og)))
        }
        else{
            setTrails_(sortByPopularity(searchItems(text,trails_og)).slice(0,4))
            setMissions_(sortByPopularity(searchItems(text,missions_og)).slice(0,2))
            setTrainings_(sortByPopularity(searchItems(text,trainings_og)).slice(0,2))
        }


    }

    function search(text){
        filterAll(text)
        setSearch_(text)
    }

    function searchItems(searchString, items) {
        const lowercasedSearchString = searchString.toLowerCase();

        return items.filter(item => {
            // Assuming each item has a 'title' property that is a string.
            return item.title && typeof item.title === 'string' &&
                item.title.toLowerCase().includes(lowercasedSearchString);
        });}

    return (
        <SafeAreaView style={{
            padding: 10,
            backgroundColor: "#FFF7E1",
            height: "100%"
        }}>
            <NavigateAndTitle title={"Browse"}/>
            <View style={{
                alignSelf: "center",
                width: "100%",
                height: "90%",
                alignItems: "center"
            }}>

                <SearchBar func={(text) =>  {search(text)}} />
                {search_ == "" ?
                    <Text  style={{
                        alignSelf: "center",
                        paddingTop: 10,
                        fontFamily: "Quicksand700Bold",
                        fontSize: 18,
                        color: 'rgba(107, 107, 107, 0.9)',
                    }}>
                        POPULAR
                    </Text>
                    : <></>}
                <SwitchView items={listId} func={(index) => setSelected(index)}/>

                {renderComponent()}
                {search_ !== "*" && search_.toLowerCase() !== "all" ? <View><Text style={{
                    alignSelf: "center",
                    paddingTop: 10,
                    fontFamily: "Quicksand700Bold",
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.9)',
                }}>
                    Search 'all' to see all courses!
                </Text></View> : <></>}
            </View>
        </SafeAreaView>
    )

}