const missions = [
    {
        id: 1,
        title: "Mission save the President",
        description: "Classic end of the week hike, a variety of medium inclines on a path through a forest.",
        img: require('../../assets/missions/IStopwatch.png'),
        bg: require('../../assets/missions/BGSaveThePresident.png'),
        time: 1,
        values: [
            {
                "title": "Calories/h",
                "value": "600/h+"
            },
            {
                "title": "Time",
                "value": "1h"
            },
            {
                "title": "Downloads",
                "value": "215"
            },
            {
                "title": "Start",
                "value": "lvl2"
            }
        ]
    },
    {
        id: 2,
        title: "Assassinate the King",
        description: "Sneak past guards and navigate through the shadows to reach the castle and dethrone ther king.",
        img: require('../../assets/missions/IAssasinateTheKing.png'), // Path to the icon image
        bg: require('../../assets/missions/BGAssasinateTheKing.png'), // Path to the background image
        time: 1,
        values: [
            {
                "title": "Calories/h",
                "value": "650/h+"
            },
            {
                "title": "Time",
                "value": "1h"
            },
            {
                "title": "Downloads",
                "value": "342"
            },
            {
                "title": "Start",
                "value": "lvl 3"
            }
        ]
    },{
        id: 4,
        title: "Alien Planet Run",
        description: "You find yourself on an alien planet full of strange creatures and scenic views. An alien creature has stolen the key to your ship. Catch it so you can get home!",
        img: require('../../assets/trails/rocket.png'),
        bg: require("../../assets/trails/BGAlien.png"),
        time: 1,
        values: [
            {
                "title": "Calories/h",
                "value": "800/h+"
            },
            {
                "title": "Time",
                "value": "1.5h"
            },
            {
                "title": "Downloads",
                "value": "790"
            },
            {
                "title": "Start",
                "value": "lvl 3"
            }]
    },

]
export default missions
