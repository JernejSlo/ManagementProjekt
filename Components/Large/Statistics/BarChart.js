import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import Column from "../../Small/Statistics/Column";
import {useEffect, useState} from "react";

export default function BarChart({x=[]}) {

    const { height: vh ,width: vw} = Dimensions.get('window');
    let [max, setMax] = useState(getMax())

    function getMax(){
        let max = 0
        for (const columns of x) {
            let data = columns.data
            if (data.length === 0){
                continue
            }
            if (max < (data[0].bottom+data[0].value)){
                max = (data[0].bottom+data[0].value)
            }
        }

        return max
    }
    useEffect(() => {
        setMax(getMax())
    },[x])
    let heightFactor = (0.154/max)*vh
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
                            <Column width={(0.6*vw)/x.length} padding={(0.14*vw)/x.length} heightFactor={heightFactor} values={column}/>
                        </View>
                    )
                })
            }
        </View>
    )

}