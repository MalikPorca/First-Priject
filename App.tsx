import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenu } from './Drawer';
export default function App(){
  return(
    
    <NavigationContainer>
      <SideMenu/>
      {/* <BottomTab/>  */}
    </NavigationContainer> 
 
  )}



