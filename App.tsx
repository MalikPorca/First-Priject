import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenu } from './Drawer';
import { BottomTab } from './BottomTab';
import { View } from 'react-native';
export default function App(){
  return(
    
    <NavigationContainer>
      <SideMenu/>
      {/* <BottomTab/>  */}
    </NavigationContainer> 
 
  )}



