
  import React, { Component } from 'react';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import Home from './Home';
  import ReadPage from './News';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  import {ToDoList} from './ToDo';
   const Drawer= createDrawerNavigator();
   import { BottomTab } from './BottomTab';

   export function SideMenu(){

     return(
   
  
   <Drawer.Navigator 
       initialRouteName='Fokus'
       useLegacyImplementation={true}
       screenOptions={{
        overlayColor:"#0000ff80", 
        swipeEdgeWidth:100,
        drawerActiveBackgroundColor:"#5099ff",
        drawerInactiveBackgroundColor:"#0000ff",
        // drawerHideStatusBarOnOpen:true,
       drawerStyle:{
        backgroundColor: '#202020aa',
        width: 270,
        
      },
      drawerType:'front',
      swipeEnabled:true,
      
      headerStyle:{
        
        backgroundColor:"#bb0000",
        height:70, 
      },
      headerTintColor:"white"

       }}
      
       >
    <Drawer.Screen
        name="Fokus"
        component={Home}
        
        options={
          {

            headerTintColor:"white",
            headerStyle:{
              backgroundColor:"#3030ff"
            },
            drawerIcon:()=>(
              <FontAwesome5 
              name="envelope-open-text"
              
              size={20}
              
              />
  
            )
          }
         } 
        />
        
        
        <Drawer.Screen
        name="Novosti"
        component={ReadPage}
        options={
          {
            headerTintColor:"white",
            headerStyle:{
              backgroundColor:"#3030ff"
            },
            drawerIcon:()=>(
              <FontAwesome5 
              name="comments-dollar"
              size={20}
              
              />
     
            )
          }
         } 
        />
       <Drawer.Screen
        name="ToDoList"
        component={ToDoList}
        options={
          {
          
            headerTitleStyle:{
              color:"white"
            },
            drawerIcon:()=>(
              <FontAwesome5 
              name="bars"
              size={20}
              />
        
            )
          }
         } 
        />
      </Drawer.Navigator>
   
    
  )
}