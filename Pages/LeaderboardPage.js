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
import Leaderboard from "../Components/Large/Leaderboard";





const community_ = [
    {
        name: "Jaka Lee",
        location: "Ljubljana, Slovenija",
        rank: 1,
        img: 'AsianGuy.png',
        activities: [
            {
                id: 1,
                title: "Summer Beach Run Course",
                description: "Enjoy this scenic hour long beach running course made specially for you!",
                img: 'trails/summerbr.png',
                bg: 'trails/BGSummer.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "70k"
                    },
                    {
                        "title": "Time",
                        "value": "102h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "119"
                    },
                    {
                        "title": "Level",
                        "value": "24"
                    }
                ]
            },
            {
                id: 2,
                title: "Uphill Forest Hike Course",
                description: "Classic end of the week hike, a variety of medium inclines on a path through a forest.",
                img: 'trails/uphillForestHike.png',
                bg: 'trails/ufhBG.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "40k"
                    },
                    {
                        "title": "Time",
                        "value": "72h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "89"
                    },
                    {
                        "title": "Level",
                        "value": "17"
                    }]
            },
            {
                id: 3,
                title: "HIIT explosive workout",
                description: "45 minute long hiit session to prepare you for the dynamics of any explosive sport!",
                img: 'Sportsicon(1).png',
                bg: 'trainings/BG1.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "1203"
                    },
                    {
                        "title": "Time",
                        "value": "1.5h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "2"
                    },
                    {
                        "title": "Level",
                        "value": "2"
                    }]
            }
        ]
    },
    {
        name: "Aleš Lunder",
        location: "Koper, Slovenija",
        rank: 2,
        img: 'AlesGuy.png',
        activities: [
            {
                id: 1,
                title: "Summer Beach Run Course",
                description: "Enjoy this scenic hour long beach running course made specially for you!",
                img: 'trails/summerbr.png',
                bg: 'trails/BGSummer.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "70k"
                    },
                    {
                        "title": "Time",
                        "value": "102h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "119"
                    },
                    {
                        "title": "Level",
                        "value": "24"
                    }
                ]
            },
            {
                id: 2,
                title: "Uphill Forest Hike Course",
                description: "Classic end of the week hike, a variety of medium inclines on a path through a forest.",
                img: 'trails/uphillForestHike.png',
                bg: 'trails/ufhBG.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "40k"
                    },
                    {
                        "title": "Time",
                        "value": "72h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "89"
                    },
                    {
                        "title": "Level",
                        "value": "17"
                    }]
            },
            {
                id: 3,
                title: "HIIT explosive workout",
                description: "45 minute long hiit session to prepare you for the dynamics of any explosive sport!",
                img: 'Sportsicon(1).png',
                bg: 'trainings/BG1.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "1203"
                    },
                    {
                        "title": "Time",
                        "value": "1.5h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "2"
                    },
                    {
                        "title": "Level",
                        "value": "2"
                    }]
            }
        ]
    },
    {
        name: "Nika Franko",
        location: "Ljubljana, Slovenija",
        rank: 3,
        img: 'RedHairGirl.png',
        activities: [
            {
                id: 1,
                title: "Summer Beach Run Course",
                description: "Enjoy this scenic hour long beach running course made specially for you!",
                img: 'trails/summerbr.png',
                bg: 'trails/BGSummer.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "70k"
                    },
                    {
                        "title": "Time",
                        "value": "102h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "119"
                    },
                    {
                        "title": "Level",
                        "value": "24"
                    }
                ]
            },
            {
                id: 2,
                title: "Uphill Forest Hike Course",
                description: "Classic end of the week hike, a variety of medium inclines on a path through a forest.",
                img: 'trails/uphillForestHike.png',
                bg: 'trails/ufhBG.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "40k"
                    },
                    {
                        "title": "Time",
                        "value": "72h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "89"
                    },
                    {
                        "title": "Level",
                        "value": "17"
                    }]
            },
            {
                id: 3,
                title: "HIIT explosive workout",
                description: "45 minute long hiit session to prepare you for the dynamics of any explosive sport!",
                img: 'trainings/I1.png',
                bg: 'trainings/BG1.png',
                time: 1,
                values: [
                    {
                        "title": "Calories b.",
                        "value": "1203"
                    },
                    {
                        "title": "Time",
                        "value": "1.5h"
                    },
                    {
                        "title": "Repetitions",
                        "value": "2"
                    },
                    {
                        "title": "Level",
                        "value": "2"
                    }]
            }
        ]
    },
]

export default function LeaderboardPage(){

    const [your,setYour] = useState(community_)
    const [invites,setInvites] = useState(community_)
    const [community,setCommunity] = useState(community_)


    const [listId, setListId] = useState([{id: 0, name: "All time"},{id: 1, name: "This month"},{id: 2, name: "Today"}])
    const [selected,setSelected] = useState(0)

    const [search_,setSearch_] = useState("")

    function sortByPopularity(list) {
        // Use the Array.sort method to sort the list by the 'downloads' value
        list.sort((item1, item2) => {
            const downloads1 = parseInt(item1.rank);
            const downloads2 = parseInt(item2.rank);

            // Sort in descending order (higher downloads first)
            return downloads2 - downloads1;
        });

        return list;
    }

    function renderComponent() {
        if (selected === 0) {
            return <Leaderboard leaderboard={your} />;
        } else if (selected === 1) {
            return <Leaderboard leaderboard={invites} />;
        } else {
            return <Leaderboard leaderboard={community} />;
        }
    }



    function filterAll(text){
        if (text.toLowerCase() == "all" || text == "*"){
            setYour(sortByPopularity(searchItems("",community_)))
            setInvites(sortByPopularity(searchItems("",community_)))
            setCommunity(sortByPopularity(searchItems("",community_)))
        }else if (text != "") {
            setYour(sortByPopularity(searchItems(text, community_)))
            setInvites(sortByPopularity(searchItems(text, community_)))
            setCommunity(sortByPopularity(searchItems(text, community_)))
        }
        else{
            setYour(sortByPopularity(searchItems(text,community_)).slice(0,4))
            setInvites(sortByPopularity(searchItems(text,community_)).slice(0,2))
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
            return item.name && typeof item.name === 'string' &&
                item.name.toLowerCase().includes(lowercasedSearchString);
        });}

    return (
        <SafeAreaView style={{
            padding: 10,
            backgroundColor: "#FFF7E1",
            height: "100%"
        }}>
            <NavigateAndTitle title={"Leaderboard"}/>
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
                        HIGHEST RANK
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