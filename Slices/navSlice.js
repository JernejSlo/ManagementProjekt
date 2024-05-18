import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    user:{
        name: "Katja Novak",
        location: "Ljubljana, Slovenija",
        img: require('../assets/UserIcons/KatjaIcon.png'),
        rank: 33,
        },
    selectedActivity:{},
    otherUser:{},
    activities: [],
    connections: [],
    past_connections: [],
    leaderboard: [],
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setActivities: (state, action) => {
            state.activities = action.payload;
        },
        setActivity: (state, action) => {
            state.selectedActivity = action.payload;
        },
        setConnections: (state, action) => {
            state.connections = action.payload;
        },
        setPastConnections: (state, action) => {
            state.past_connections = action.payload;
        },
        setLeaderboard: (state, action) => {
            state.activities = action.payload;
        },
        setOtherUser: (state, action) => {
            state.otherUser = action.payload;
        },
    },
});

export const {setUser,setActivities,setConnections,setPastConnections,setLeaderboard, setActivity, setOtherUser} = navSlice.actions;


//Selectors
export const selectUser = (state) => state.nav.user;
export const selectOtherUser = (state) => state.nav.otherUser;
export const selectActivities = (state) => state.nav.activities;
export const selectActivity = (state) => state.nav.selectedActivity;
export const selectConnections = (state) => state.nav.connections;
export const selectPastConnections = (state) => state.nav.past_connections;
export const selectLeaderboard = (state) => state.nav.leaderboard;

export default navSlice.reducer;
