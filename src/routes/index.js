import { AddRegistryScreen, DataRegistryScreen, HomeScreen, SplashScreen } from "../pages";

const { createNativeStackNavigator } = require('@react-navigation/native-stack');
const { BottomNavigator } = require('../components/molecules');
const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SplashScreen}
        name="SplashScreen"
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        component={MainApp}
        name="MainApp"
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AddRegistryScreen}
        name="AddRegistryScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={DataRegistryScreen}
        name="DataRegistryScreen"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
