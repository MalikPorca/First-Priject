import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';
import ReadPage from './News';
import { ToDoList } from './ToDo';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';import { NavigationContainer } from "@react-navigation/native";

        const Tab = createMaterialBottomTabNavigator();

        export function BottomTab(){
          return(
          
               <Tab.Navigator 
                  // useLegacyImplementation={true}
                  screenOption={({route})=>({
                TabBarIcon:({focused, size, color})=>{
                  let iconName;
                  if (route.name==="ToDoList"){
                    iconName="bars";
                    size = focused? 20:25
                    color=focused? "#fff": "black"
        
                  } else if (route.name==="News"){
                    iconName="comments-dollar";
                    size =focused? 20:25
                    color=focused? "#fff": "black"
                    
        
                  } else if (route.name==="Fokus"){
                    iconName="envelope-open-text";
                    size =focused? 20:25
                    color=focused? "#fff": "black"
        
                  }
                  return(
                    <FontAwesome5
                    name={iconName}
                    size={size}
                    color={color}
                    />
                  )
                }
        
              })} 
              TabBarOptions={{
                activeBackgroundColor:"red",
                showLabel:true,
                labelStyle:{fontSize:12, color:"black"},
              }}
              activeColor="black"
              inactiveColor="#999"
              barStyle={{backgroundColor:"#cc0000"}}
              >
                
                
                 <Tab.Screen
                name="ToDoList"
                component={ToDoList} />
                
                <Tab.Screen
                name="News"
                component={ReadPage}
                />
                <Tab.Screen
                name="Fokus"
                component={Home}
                /> 
              </Tab.Navigator>
         
            
          )
        }
//     )
// }

