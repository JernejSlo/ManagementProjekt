import { StyleSheet, Text, View } from 'react-native';
import Dashboard from "./Pages/Dashboard";
import { NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {store} from "./store";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

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