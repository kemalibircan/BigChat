import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import NavigationContainerApp from './src/routes/NavigationContainerApp'
import 'react-native-gesture-handler';


const App = () =>{

  return(
  <NavigationContainer>
   <NavigationContainerApp></NavigationContainerApp>
  </NavigationContainer>

  )

} 
export default App;