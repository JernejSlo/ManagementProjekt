import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import ValuesInLine from "../Small/ValuesInLine";
import {setActivity} from "../../Slices/navSlice";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";

export const courseImages = {
    // Missions
    "missions/IStopwatch.png": require("../../assets/missions/IStopwatch.png"),
    "missions/IAssasinateTheKing.png": require("../../assets/missions/IAssasinateTheKing.png"),
    "missions/rocket.png": require("../../assets/missions/rocket.png"),
    // Trails
    "trails/uphillForestHike.png": require("../../assets/trails/uphillForestHike.png"),
    "trails/summerbr.png": require("../../assets/trails/summerbr.png"),
    "trails/Gift.png": require("../../assets/trails/Gift.png"),
    "trails/I1.png": require("../../assets/trails/I1.png"),
    "trails/I2.png": require("../../assets/trails/I2.png"),
    "trails/I3.png": require("../../assets/trails/I3.png"),
    "trails/I4.png": require("../../assets/trails/I4.png"),
    // Trainings
    "trainings/I1.png": require("../../assets/trainings/I1.png"),
    "trainings/I2.png": require("../../assets/trainings/I2.png"),
    "assets/Sportsicon(1).png": require("../../assets/Sportsicon(1).png"),
};


export default function Activities({activities }){
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

    return (
        <ScrollView style={{
            width: "80%",
            alignSelf: "center",
        }}>
            {activities.map((item, index) => (
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
                    }} source={courseImages[item.img]}/>
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
                        <ValuesInLine vals={item?.values?.slice(0,2)} texts={styles}
                                      paddinga={2}
                                      paddingl={0}
                                      paddingr={0}
                                      margint={1}/>
                        <ValuesInLine vals={item?.values?.slice(2,4)} texts={styles}
                                      paddinga={1}
                                      paddingl={0}
                                      paddingr={0}
                                      margint={1}/>
                    </View>
                </TouchableOpacity>
            ))
            }
        </ScrollView>
    )
}