import {View, Text, StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
import {Path, Svg} from "react-native-svg";

export default function WavyRectangle({style,contentStyle={}, children, topColor="lightgray", bottomColor="darkgray"}) {

    return (
        <View style={{...style, overflow: "hidden", backgroundColor: topColor}}>
            <Svg
                width={style.width}
                height={style.height+60}
                viewBox={`0 0 ${style.width*2.55} ${style.height}`}
                style={styles.svg}
            >
                <Path d="M221.136 99.9507L55.1635 15.9267C29.8867 3.13023 0 21.4983 0 49.8297V255C0 300.987 17.0132 850 38 10000H812C832.987 800 850 800.987 850 255V38.2162C850 13.0186 825.923 -5.20123 801.674 1.64616L717.695 25.3597C712.833 26.7326 707.746 27.1222 702.732 26.5058L540.763 6.59595C535.05 5.89366 529.252 6.49847 523.807 8.36474L250.619 101.995C240.918 105.32 230.285 104.583 221.136 99.9507Z"
                      fill={bottomColor}/>

            </Svg>
            <View style={{
                ...contentStyle,
            }}>
                {children}
            </View>
        </View>
    );



}

const styles = StyleSheet.create({
    svg: {
        position: 'absolute',
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
    },
});