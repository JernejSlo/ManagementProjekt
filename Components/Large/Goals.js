import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import ValuesInLine from "../Small/ValuesInLine";

export default function Goals({goals }){

    const styles = StyleSheet.create({
        top: {
            fontFamily: "Quicksand700Bold",
            fontSize: 8,
            color: 'rgba(255, 255, 255, 0.4)',
        },
        bottom: {
            fontFamily: "Quicksand700Bold",
            fontSize: 12,
            color: 'rgba(255, 255, 255, 1)',
        }
    })

    const navigator = useNavigation()
    const dispatch = useDispatch();

    return(
        <ScrollView style={{
            width: "80%",
            alignSelf: "center",
        }}>




            <Text style={{
                fontFamily: "Quicksand700Bold",
                fontSize: 20,
                color: '#6b6b6b',
                marginBottom: 10,
            }}>
                Progress
            </Text>


            {goals.map((item, index) => (
                <TouchableOpacity key={Math.random() * 100000} style={{
                    flexDirection: "row",
                    backgroundColor: "#d1d1d1",
                    padding: 8,
                    borderRadius: 18,
                    height: 82,
                    marginBottom: 7,
                }}
                                  onPress={()=>{
                                      navigator.navigate("Course")
                                      dispatch(setActivity(item))
                                  }}
                >
                    <Image style={{
                        "height": 66,
                        "width": 66,
                        padding: 3,
                        marginRight: 8,
                        backgroundColor: "white",
                        borderRadius: 12,
                    }} source={item.img}/>
                    <View style={{
                        width: "45%",
                    }}>
                        <Text style={{
                            fontFamily: "Quicksand700Bold",
                            fontSize: 14,
                            color: '#6b6b6b',
                        }}>
                            {item.title}
                        </Text>
                        <Text  style={{
                            fontFamily: "Quicksand700Bold",
                            fontSize: 8,
                            color: 'rgba(107, 107, 107, 0.45)',
                        }}>
                            {item.description}
                        </Text>
                    </View>
                    <View style={{
                        justifyContent: "center",
                        paddingLeft: 5,
                        alignItems: "center"
                    }}>
                        <ValuesInLine vals={item.values.slice(0,2)} texts={styles}
                                      paddinga={2}
                                      paddingl={0}
                                      paddingr={0}
                                      margint={1}/>
                        <ValuesInLine vals={item.values.slice(2,4)} texts={styles}
                                      paddinga={1}
                                      paddingl={0}
                                      paddingr={0}
                                      margint={1}/>
                    </View>
                </TouchableOpacity>
            ))
            }
            

            


            <Text style={{
                fontFamily: "Quicksand700Bold",
                fontSize: 20,
                color: '#6b6b6b',
                marginBottom: 10,
            }}>
                Today
            </Text>

{goals.map((item, index) => (
                <TouchableOpacity key={Math.random() * 100000} style={{
                    flexDirection: "row",
                    backgroundColor: "#d1d1d1",
                    padding: 8,
                    borderRadius: 18,
                    height: 82,
                    marginBottom: 7,
                }}
                                  onPress={()=>{
                                      navigator.navigate("Course")
                                      dispatch(setActivity(item))
                                  }}
                >
                    <Image style={{
                        "height": 66,
                        "width": 66,
                        padding: 3,
                        marginRight: 8,
                        backgroundColor: "white",
                        borderRadius: 12,
                    }} source={item.img}/>
                    <View style={{
                        width: "45%",
                    }}>
                        <Text style={{
                            fontFamily: "Quicksand700Bold",
                            fontSize: 14,
                            color: '#6b6b6b',
                        }}>
                            {item.title}
                        </Text>
                        <Text  style={{
                            fontFamily: "Quicksand700Bold",
                            fontSize: 8,
                            color: 'rgba(107, 107, 107, 0.45)',
                        }}>
                            {item.description}
                        </Text>
                    </View>
                    <View style={{
                        justifyContent: "center",
                        paddingLeft: 5,
                        alignItems: "center"
                    }}>
                        <ValuesInLine vals={item.values.slice(0,2)} texts={styles}
                                      paddinga={2}
                                      paddingl={0}
                                      paddingr={0}
                                      margint={1}/>
                        <ValuesInLine vals={item.values.slice(2,4)} texts={styles}
                                      paddinga={1}
                                      paddingl={0}
                                      paddingr={0}
                                      margint={1}/>
                    </View>
                </TouchableOpacity>
            ))
            }


            <TouchableOpacity style={{
                fontFamily: "Quicksand700Bold",
                fontSize: 20,
                color: '#6b6b6b',
                marginBottom: 10,
                alignSelf: "center",
            }}>
                OPEN GOAL PAGE
            </TouchableOpacity>


        </ScrollView>
    )
}