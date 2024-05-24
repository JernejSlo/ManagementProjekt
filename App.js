import { StyleSheet, Text, View } from 'react-native';
import Dashboard from "./Pages/Dashboard";
import { NavigationContainer} from "@react-navigation/native";
import {Provider, useSelector} from "react-redux";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {store} from "./store";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Statistics from "./Pages/Statistics";
import Browse from "./Pages/Browse";
import TrainingPlanPage from "./Pages/TrainingPlanPage";
import {selectUser} from "./Slices/navSlice";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CoursePage from "./Pages/CoursePage";
import CourseInProgress from "./Pages/CourseInProgress";
import Groups from './Components/Large/Groups';
import GroupPage from './Components/Large/GroupPage';
import Teams from "./Pages/Teams";
import LeaderboardPage from "./Pages/LeaderboardPage";
import OtherUserDashboard from "./Pages/OtherUserDashboard";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="Statistics"
                  component={Statistics}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="Course"
                  component={CoursePage}
                  options={{
                    headerShown: false,
                  }}
              />
                <Stack.Screen
                    name="OtherUserDashboard"
                    component={OtherUserDashboard}
                    options={{
                        headerShown: false,
                    }}
                />
              <Stack.Screen
                  name="Browse"
                  component={Browse}
                  options={{
                    headerShown: false,
                  }}
              />
                <Stack.Screen
                    name="Leaderboard"
                    component={LeaderboardPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Teams"
                    component={Teams}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Groups"
                    component={Groups}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GroupPage"
                    component={GroupPage}
                    options={{ headerShown: false }}
                />
              <Stack.Screen
                  name="CourseInProgress"
                  component={CourseInProgress}
                  options={{
                    headerShown: false,
                  }}
              />
              <Stack.Screen
                  name="TrainingPlanPage"
                  component={TrainingPlanPage}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{ headerShown: false }}
              />

            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});