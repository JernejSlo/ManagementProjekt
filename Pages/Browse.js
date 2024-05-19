import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons"
import SwitchView from "../Components/Small/SwitchView";
import Activities from "../Components/Large/Activities";
import missions from "../Components/TempValues/missions";
import trails from "../Components/TempValues/Trails";
import SearchBar from "../Components/Small/SearchBar";
import {useNavigation} from "@react-navigation/native";
import training from "../Components/TempValues/Training";
import NavigateAndTitle from "../Components/Small/NavigateAndTitle";


export default function Browse(){

    const [listId, setListId] = useState([{id: 0,name: "Trails"},{id: 1,name: "Missions"},{id: 2,name: "Training"}])
    const [selected,setSelected] = useState(0)

    const [trails_,setTrails_] = useState(sortByPopularity(trails).slice(0,4))
    const [missions_,setMissions_] = useState(sortByPopularity(missions))
    const [trainings_,setTrainings_] = useState(sortByPopularity(training))

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
            setTrails_(sortByPopularity(searchItems("",trails)))
            setMissions_(sortByPopularity(searchItems("",missions)))
            setTrainings_(sortByPopularity(searchItems("",training)))
        }else if (text != "") {
            setTrails_(sortByPopularity(searchItems(text, trails)))
            setMissions_(sortByPopularity(searchItems(text, missions)))
            setTrainings_(sortByPopularity(searchItems(text, training)))
        }
        else{
            setTrails_(sortByPopularity(searchItems(text,trails)).slice(0,4))
            setMissions_(sortByPopularity(searchItems(text,missions)).slice(0,2))
            setTrainings_(sortByPopularity(searchItems(text,training)).slice(0,2))
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