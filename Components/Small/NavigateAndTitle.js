import Icon from "react-native-vector-icons/MaterialIcons";
import {View, Text,TouchableOpacity, FlatList, Button, TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function NavigateAndTitle({title, size}){
    let navigator = useNavigation()

    return(
        <View style={{
            flexDirection: "row"
        }}>
            <TouchableOpacity style={{
                width: "10%"
            }}
                              onPress={()=>{navigator.goBack()}}
            >
                <Icon name="chevron-left" size={40} color="#000" />
            </TouchableOpacity>
            <Text  style={{
                alignSelf: "center",
                paddingBottom: 10,
                fontFamily: "Quicksand700Bold",
                fontSize: size !== undefined ? size : 28,
                width: "80%",
                marginRight: "10%",
                textAlign: "center",
                color: '#303E49',
            }}>
                {title}
            </Text>
        </View>
    )
}