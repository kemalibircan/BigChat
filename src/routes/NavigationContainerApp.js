import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register'

import 'react-native-gesture-handler';


const Stack = createStackNavigator();

function NavigationContainerApp() {
  return (
    <Stack.Navigator initialRouteName='Register'>
     <Stack.Screen name='Register' component={Register} options={{headerShown:false}}></Stack.Screen>
     <Stack.Screen name='Login' component={Login} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  );
}
export default NavigationContainerApp