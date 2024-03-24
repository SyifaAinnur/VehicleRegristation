const { createNativeStackNavigator } = require('@react-navigation/native-stack');
const { BottomNavigator } = require('../components/molecules');
const { HomeScreen, SplashScreen, ReservationScreen, ProfileScreen, EditProfileScreen, HistoryScreen, LoginScreen, RegisterScreen, ForgetPassword, RequestMitra, ProfileMitraScreen, EditProfileMitraScreen, HistoryManagementMitra, DetailScreen, DetailHistoryScreen, DetailAddress, GetStartedScreen, FnQScreen, NotifUserScreen, NotifMitraScreen, DetailDirection, WhatsappScreen } = require('../pages');
const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Riwayat"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

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
    </Stack.Navigator>
  );
};

export default Router;
