import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export default function Column({values=[], padding, width, heightFactor}) {

    console.log(width,heightFactor)
    if (values === undefined){
        return(
            <View>

            </View>
        )
    }
    else{
        return (
            <View style={{
                alignItems: "center",
                padding: padding/2,
            }}>
                <View style={{
                    marginBottom: -18,
                    height: "100%",
                    justifyContent: "flex-end"
                }}>
                    {
                        values.data.map((item, index) => {

                            return(
                                <View key={index} style={{
                                    borderRadius: 5,
                                    backgroundColor: item.color,
                                    maxWidth: 30,
                                    marginBottom: -heightFactor*(item.bottom)+index*0.1,
                                    bottom: "14%",
                                    width: width,
                                    height: heightFactor*(item.value+item.bottom),
                                }}>
                                    <Text style={{color: item.color}}>
                                        {""+item.value}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
                <Text style={{
                    fontFamily: "Quicksand700Bold",
                    fontSize: 10,
                    color: '#fff',
                }}>
                    {
                        values.title
                    }
                </Text>
            </View>
        )
    }


}