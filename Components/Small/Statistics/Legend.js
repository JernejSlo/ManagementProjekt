import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export default function Legend({types, metadata}) {

    return (
        <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
        }}>
            {
                types.map((item,index) => {

                    return(
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 7
                        }}>
                            <View style={{
                                backgroundColor: item.color,
                                width: metadata.typeDisplaySize,
                                height: metadata.typeDisplaySize,
                                marginRight: 3,
                                borderRadius: metadata.typeDisplaySize/4,
                            }}/>
                            <Text style={{
                                fontSize: 8,
                                color: "#fff",
                                fontFamily: "Quicksand700Bold",
                            }}>
                                {item.text}
                            </Text>
                        </View>
                    )
                })
            }
        </View>
    )

}