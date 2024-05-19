import { StyleSheet, Text, View } from 'react-native';
import Dashboard from "./Pages/Dashboard";
import { NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {store} from "./store";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Statistics from "./Pages/Statistics";
import Browse from "./Pages/Browse";
import TrainingPlanPage from "./Pages/TrainingPlanPage";

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
                  options={{
                    headerShown: false,
                  }}
              />
                <Stack.Screen
                    name="Statistics"
                    component={Statistics}
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
                    name="TrainingPlanPage"
                    component={TrainingPlanPage}
                    options={{
                      headerShown: false,
                    }}
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