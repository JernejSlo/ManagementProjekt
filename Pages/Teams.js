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

const yourTeams = [
    {id: 0, img: 'missions/IStopwatch.png', title: "Clever Fit", description: "Team of Clever Fit gym visitors. Compete for prizes like gym merch!", values: [
            {title: "Members", value: 103},
            {title: "h/week", value: "3h"},
            {title: "Coached", value: "no"},
            {title: "Rating", value: 3.4},
        ]},
    {id: 1, img: 'missions/IStopwatch.png',  title: "STŠ Badminton", description: "For all people who want like the free badminton sessions at STŠ and want to get better at badminton.", values: [
            {title: "Members", value: 11},
            {title: "h/week", value: "3h"},
            {title: "Coached", value: "no"},
            {title: "Rating", value: 4.2},
        ]},
    {id: 2, img: 'missions/IStopwatch.png',  title: "STŠ Ping Pong", description: "For all people who want like the free ping-pong sessions at STŠ and want to get better at ping-pong.", values: [
            {title: "Members", value: 6},
            {title: "h/week", value: "4h"},
            {title: "Coached", value: "yes"},
            {title: "Rating", value: 4.2},
        ]},
]

const invitations = [
    {id: 0, img: 'missions/IStopwatch.png',  title: "Clever Fit 2", description: "Team of Clever Fit gym visitors. Compete for prizes like gym merch!", values: [
            {title: "Members", value: 103},
            {title: "h/week", value: "3h"},
            {title: "Coached", value: "no"},
            {title: "Rating", value: 3.4},
        ]},
]

const community_ = [
    {id: 0, img: 'missions/IStopwatch.png',  title: "Clever Fit 3 ", description: "Team of Clever Fit gym visitors. Compete for prizes like gym merch!", values: [
            {title: "Members", value: 103},
            {title: "h/week", value: "3h"},
            {title: "Coached", value: "no"},
            {title: "Rating", value: 3.4},
        ]},
    {id: 1, img: 'missions/IStopwatch.png', title: "STŠ Badminton 2", description: "For all people who want like the free badminton sessions at STŠ and want to get better at badminton.", values: [
            {title: "Members", value: 11},
            {title: "h/week", value: "3h"},
            {title: "Coached", value: "no"},
            {title: "Rating", value: 4.2},
        ]},
    {id: 2, img: 'missions/IStopwatch.png', title: "STŠ Ping Pong 2", description: "For all people who want like the free ping-pong sessions at STŠ and want to get better at ping-pong.", values: [
            {title: "Members", value: 6},
            {title: "h/week", value: "4h"},
            {title: "Coached", value: "yes"},
            {title: "Rating", value: 4.2},
        ]},
]

export default function Teams(){

    const [your,setYour] = useState(yourTeams)
    const [invites,setInvites] = useState(invitations)
    const [community,setCommunity] = useState(community_)


    const [listId, setListId] = useState([{id: 0,name: "Your teams"},{id: 1,name: "Invitations"},{id: 2,name: "Community"}])
    const [selected,setSelected] = useState(0)

    const [search_,setSearch_] = useState("")

    function sortByPopularity(list) {
        // Use the Array.sort method to sort the list by the 'downloads' value
        list.sort((item1, item2) => {
            const downloads1 = parseInt(item1.values.find(value => value.title === "Members").value);
            const downloads2 = parseInt(item2.values.find(value => value.title === "Members").value);

            // Sort in descending order (higher downloads first)
            return downloads2 - downloads1;
        });

        return list;
    }

    function renderComponent() {
        if (selected === 0) {
            return <Activities activities={your} />;
        } else if (selected === 1) {
            return <Activities activities={invites} />;
        } else {
            return <Activities activities={community} />;
        }
    }



    function filterAll(text){
        if (text.toLowerCase() == "all" || text == "*"){
            setYour(sortByPopularity(searchItems("",yourTeams)))
            setInvites(sortByPopularity(searchItems("",invitations)))
            setCommunity(sortByPopularity(searchItems("",community_)))
        }else if (text != "") {
            setYour(sortByPopularity(searchItems(text, yourTeams)))
            setInvites(sortByPopularity(searchItems(text, invitations)))
            setCommunity(sortByPopularity(searchItems(text, community_)))
        }
        else{
            setYour(sortByPopularity(searchItems(text,yourTeams)).slice(0,4))
            setInvites(sortByPopularity(searchItems(text,invitations)).slice(0,2))
            setCommunity(sortByPopularity(searchItems(text,community_)).slice(0,2))
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
            <NavigateAndTitle title={"Teams"}/>
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
                    Search 'all' to see all teams!
                </Text></View> : <></>}
            </View>
        </SafeAreaView>
    )

}