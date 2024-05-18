import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const ValuesInLine = ({ vals, color, texts, margint, paddinga, paddingl, paddingr}) => {;


    function addLine(index){
        if (index < vals.length-1){
            return (
                <View style={{
                    backgroundColor: "white",
                    opacity: 0.4,
                    width: 2,
                    marginLeft: margint,
                    marginRight: margint,
                    height: "80%",
                    marginTop: "10%",
                }}>

                </View>
            )
        }
        else{
            return (<></>)
        }
    }

    return (
        <View style={{
            backgroundColor: color,
            flexDirection: "row",
            margin: margint,
            padding: paddinga,
            paddingLeft: paddingl,
            paddingRight: paddingr,
            borderRadius: 16,
        }}>
            {vals.map((item, index) => (
                <View
                    key={Math.floor(Math.random() * 100000)}
                    style={{
                    flexDirection: "row",
                }}>
                    <View
                        key={Math.floor(Math.random() * 100000)}
                        style={{
                        textAlign: "center",
                        alignItems: "center",
                        paddingRight: 4,
                        paddingLeft: 4,
                    }}>
                        <Text key={Math.floor(Math.random() * 100000)} style={texts ? texts.top : styles.topx}>
                            {item.title}
                        </Text>
                        <Text key={Math.floor(Math.random() * 100000)} style={texts ? texts.bottom : styles.bottomx}>
                            {item.value}
                        </Text>
                    </View>
                    {
                    addLine(index)
                }
                </View>

            ))}
        </View>
    );
};

ValuesInLine.propTypes = {
    vals: PropTypes.array.isRequired,
};
const styles = StyleSheet.create({
    topx: {

    },
    bottomx:{

    }
})
export default ValuesInLine;
