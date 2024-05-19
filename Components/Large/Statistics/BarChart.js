import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import Column from "../../Small/Statistics/Column";

export default function BarChart({x=[]}) {

    const { height: vh ,width: vw} = Dimensions.get('window');

    return (
        <View style={{
            alignItems: "flex-end",
            justifyContent: "center",
            flexDirection: "row",
        }}>
            {
                x.map((column, index) => {
                    return (
                        <View style={{
                            height: "94%",
                            justifyContent: "center",

                            ali: "flex-end",
                        }} key={index}>
                            <Column width={(0.6*vw)/x.length} padding={(0.14*vw)/x.length} heightFactor={0.005*vh} values={column}/>
                        </View>
                    )
                })
            }
        </View>
    )

}