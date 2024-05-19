import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TextInput} from 'react-native';
import { ImageBackground,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SearchBar({func}){

    const [search,setSearch] = useState("")

    function changeText(text){
        func(text)
        setSearch(text)
    }

    return(
        <View style={{
            width: "80%",
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 10,
            height: 36,
            padding: 2,
            backgroundColor: "#d1d1d1",
            borderRadius: 20,
            flexDirection: "row",
        }}>
            <Icon name="mic" size={26} style={{
                width: "10%",
                padding: 3,
                color: "#656565"
            }}/>
            <TextInput onChangeText={(text) => changeText(text)}
                       placeholder="Write text to search..."

                       style={{
                           width: "79%"
                       }}/>
            <Icon name="search" size={26} style={{
                width: "10%",
                padding: 3,
                color: "#656565"
            }}/>
        </View>
    )


}