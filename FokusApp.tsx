import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenu } from './Drawer';
export default function FokusApp(){
  return(
    
    <NavigationContainer>
      <SideMenu/>
      {/* <BottomTab/>  */}
    </NavigationContainer> 
 
  )}


