import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function SwitchView({ items, func }){

    const [selected, setSelected] = useState(0)
    function changeSelection(i){
        setSelected(i)
        func(i)
    }
    return (
        <View style={{
            width: "80%",
            maxHeight: "5%",
            minHeight: 38,
            backgroundColor: "#c0c0c0",
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 14,
            padding: 5,
            flexDirection: "row"
        }}>
            {
                items.map((item, index) => (
                    <TouchableOpacity
                        key={Math.random()*100000}
                        onPress={() =>changeSelection(index)}
                        style={{
                        width: "33.333%",
                        height: "100%",
                        justifyContent: "center",
                        backgroundColor: index == selected ? "#e0e0e0" : "transparent",
                        borderRadius: 10,
                    }}
                    >
                        <Text style={{
                            alignSelf: "center",
                            fontFamily: "Quicksand700Bold",
                            fontSize: 14,
                            color: index == selected ? "#c0c0c0" : 'rgba(255, 255, 255, 0.4)',

                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )

}