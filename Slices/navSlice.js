import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    user:{
        name: "Katja Novak",
        location: "Ljubljana, Slovenija",
        img: require('../assets/UserIcons/KatjaIcon.png'),
        rank: 33,
        startWeight: 70,
        weight: 67,
        goal: 10
        },
    selectedActivity:{},
    otherUser:{},
    trainingPlan:{},
    activities: [
        {
            id: 1,
            added: true,
            title: "Summer Beach Run Course",
            description: "Enjoy this scenic hour long beach running course made specially for you!",
            img: require('../assets/trails/summerbr.png'),
            bg: require('../assets/trails/BGSummer.png'),
            time: 1,
            values: [
                {
                    "title": "Calories b.",
                    "value": "2643"
                },
                {
                    "title": "Time",
                    "value": "5h"
                },
                {
                    "title": "Repetitions",
                    "value": "5"
                },
                {
                    "title": "Level",
                    "value": "4"
                }
            ]
        },
        {
            id: 2,
            added: true,
            title: "Mission save the President",
            description: "Enjoy this hour long dynamic mission full of running and sneaking!",
            img: require('../assets/missions/IStopwatch.png'),
            bg: require('../assets/missions/BGSaveThePresident.png'),
            time: 1,
            values: [
                {
                    "title": "Calories b.",
                    "value": "1102"
                },
                {
                    "title": "Time",
                    "value": "2h"
                },
                {
                    "title": "Repetitions",
                    "value": "2"
                },
                {
                    "title": "Level",
                    "value": "3"
                }]},
        {
            id: 3,
            added: true,
            title: "HIIT explosive workout",
            description: "45 minute long hiit session to prepare you for the dynamics of any explosive sport!",
            img: require('../assets/Sportsicon(1).png'),
            bg: require('../assets/trainings/BG1.png'),
            time: 1,
            values: [
                {
                    "title": "Calories b.",
                    "value": "423"
                },
                {
                    "title": "Time",
                    "value": "0.5h"
                },
                {
                    "title": "Repetitions",
                    "value": "0"
                },
                {
                    "title": "Level",
                    "value": "0"
                }]
        },
    ],
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
export const selectTrainingPlan = (state) => state.nav.trainingPlan;
export const selectOtherUser = (state) => state.nav.otherUser;
export const selectActivities = (state) => state.nav.activities;
export const selectActivity = (state) => state.nav.selectedActivity;
export const selectConnections = (state) => state.nav.connections;
export const selectPastConnections = (state) => state.nav.past_connections;
export const selectLeaderboard = (state) => state.nav.leaderboard;

export default navSlice.reducer;
