
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/app/Home/home";
import Login from '../screens/auth/Login'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Register from "../screens/auth/Register"
import Settings from "../screens/app/Home/settings"


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'wrench' : 'wrench';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
       <Tab.Screen name="Settings" component={Settings} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}

export default MyTabs
