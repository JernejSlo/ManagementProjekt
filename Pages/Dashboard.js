import {SafeAreaView} from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setUser} from "../Slices/navSlice";

const Dashboard = () => {

    let user = useSelector(selectUser)
    let dispatch = useDispatch()

    let newUser = {
            name: "Matija Novak",
            location: "Ljubljana, Slovenija",
            img: require('../assets/UserIcons/KatjaIcon.png'),
            rank: 33,
        }
    function setNewUser(){
        dispatch(setUser(newUser))
    }

    return (
        <SafeAreaView>
            <Text>
                Welcome {user.name}!
            </Text>
            <TouchableOpacity onPress={() => setNewUser()}>
                <Text>
                    Press me to change user
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Dashboard