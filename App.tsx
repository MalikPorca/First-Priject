import 'react-native-gesture-handler';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { Component } from 'react';
import { SafeAreaView,Image, StyleSheet, Button, TextInput, Text, View, ScrollView, RefreshControl, TouchableOpacity, ToastAndroid, Pressable, Alert, Modal, ImageBackground  } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MalikButton from './CustomButton';
import Home from './Home';
import ReadPage from './News';



const Input = ({navigation}) => {
  let [text, onChangeText] = React.useState("");
   let [toDoList, setToDoList] = React.useState<string[]>([]);
   let [edit, onChangeEdit] = React.useState(false);
   const [refresh, setRefresh]= React.useState(false);
   let [pressed, setPressed]= React.useState(false);
   
   
   
   
   
   //Dodoavanje elemenata u listu
   function submit  (){
    if(text.length<=3)Alert.alert("Greška","Morate unijet vise od 3 znaka!", [{text:"ok"}])
     else
     toDoList.push(text)
  if(text==" ")ToastAndroid.show("Empty task, please write something",ToastAndroid.SHORT) 
   else null
 onChangeText(" ");
 setPressed(!pressed);
    
  }
   
 


    const showEdit=()=>{
     navigation.navigate("messages");
    }
//Brisaje cijele liste
    const clearAll=(i:number)=>setToDoList([])

//brisajne pojedinih elemenata iz liste
    const deleteItem=(index)=>setToDoList(toDoList.filter((_,i)=>i!==index))

    const Refresh =()=>{
      setRefresh(true);
      setToDoList([]) ;
       
      setRefresh(false);
    }
    
  return (
    <ImageBackground
    source={require ("./assets/backgroundImage.jpg")}
    style={styles.backgroundImage}
    >
    <SafeAreaView style={styles.body}>

{/*      

ovo nisam uspio trebam malo ispitati
        <Taskovi
        refresh={refresh}
        onChange3={(e) => onChangeText(e.nativeEvent.text)}
        onRefresh={Refresh}
        submit={submit}
       
       OnPress2={deleteItem}
        showCriptoPage={showCriptoPage}
        
        showEdit={showEdit}
        clearAll={clearAll}
         /> */}
    
       <ScrollView
      refreshControl={<RefreshControl
      refreshing={refresh}
      onRefresh={Refresh}
      
      />}
      
      >
      <TextInput
       style={styles.input}
       defaultValue={text}
       onChange={(e) => onChangeText(e.nativeEvent.text)}/>  
       {edit &&(
       <View>
        
       <Button
       title='edit'
       color={"#d40202"}
       onPress={submit}
       /></View>
       )}    
      
          {toDoList.map((text, index)=>(
      <View style={styles.text} key={index} >   
        <Text style={styles.text} key={index} >
          {text+"             "}
        </Text> 

        <View style={styles.button}>
         <Button 
           key={index}
           title='X'
           color={"#e60404"} 
            //onPress={(parameter)=>{}}
           onPress={()=>deleteItem(index)}/>
</View>
<View style={styles.button}>
          <Button 
           key={index}
           title='Edit'
           color={"#e60404"} 
           onPress={showEdit}/>
        </View>
      
      </View>
     ))}
  
      <View style={styles.ClearButton}>
       <Button
          title='                                  Clear                                  '
          color={"#800000"}
          onPress={()=>clearAll(1)}          
          />
      </View>

      </ScrollView> 
      
     {/* unikatno dugme */}
     {/* ---------------------------------------------- */}
     <View>
        <MalikButton onPressFunction={submit}/>
      </View>
     
    </SafeAreaView> 
    </ImageBackground>      
  );
};


//-------------------------------------------------------------



// const Tab= createMaterialBottomTabNavigator();

// export function BottomTab(){
//   return(
//     <NavigationContainer>
//        <Tab.Navigator 
//           useLegacyImplementation={true}
//           screenOption={({route})=>({
//         TabBarIcon:({focused, size, color})=>{
//           let iconName;
//           if (route.name==="ToDoList"){
//             iconName="bars";
//             size = focused? 20:25
//             color=focused? "#fff": "black"

//           } else if (route.name==="messages"){
//             iconName="comments-dollar";
//             size =focused? 20:25
//             color=focused? "#fff": "black"
            

//           } else if (route.name==="Mail"){
//             iconName="envelope-open-text";
//             size =focused? 20:25
//             color=focused? "#fff": "black"

//           }
//           return(
//             <FontAwesome5
//             name={iconName}
//             size={size}
//             color={color}
//             />
//           )
//         }

//       })} 
//       TabBarOptions={{
//         activeBackgroundColor:"red",
//         showLabel:true,
//         labelStyle:{fontSize:12, color:"black"},
//       }}
//       activeColor="black"
//       inactiveColor="#999"
//       barStyle={{backgroundColor:"#cc0000"}}
//       >
        
        
//         <Tab.Screen
//         name="ToDoList"
//         component={Input}
//         // options={
//         //   {header: () => null}
//         // } 
//         />
//         <Tab.Screen
//         name="messages"
//         component={ReadPage}
//         />
//         <Tab.Screen
//         name="Mail"
//         component={Home}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
    
//   )
// }
const Drawer= createDrawerNavigator();

function App(){
  return(
    <NavigationContainer>
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
        component={Input}
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
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  backgroundImage:{
    height:"100%"
  },
 body: {
  marginTop:40,
  margin: 20,
  marginBottom:80,  
  // backgroundColor:"#D3D3D3",
  borderRadius:20,
  shadowOpacity:20,
  shadowColor:"black",
 },
 
 text:{
  backgroundColor: 'black',
  color: "white",
  fontSize:18,
  marginLeft:10,  
  margin: 10,
  width: 299, 
  height: 30, 
  flex:11,
  textAlign: "center" , 
  alignItems:"center" ,
  flexDirection:'row'
},
 plus:{
  fontSize:45,
  color:"white",
  textAlign: "center" , 
  marginLeft:242,
  marginBottom:13,
  marginTop:10,
  width:63,
  height:63,
  backgroundColor:"#8B4513",
  borderRadius:100,
 },
  input: {
    height: 50,
    margin: 12,
    marginTop: 35,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    color:"white",
    fontSize:22,
    backgroundColor:"#450",

  },
    button: {
      textAlign: "center" , 
      alignItems:"center" ,  
     marginLeft:2,
      
    },
    ClearButton: {
      textAlign: "center" , 
      alignItems:"center" ,
      margin:20,
      marginLeft:21,        
    },
    kripto:{
     backgroundColor:"black",
     height:650,
     width:300,
      margin:30,
     
     },
    
    bcgImage:{
      width:"100%",
    
    
    },
    headertext:{
      color:"white",
      fontSize:30,
      padding:15,
     
    },
    middle:{
      backgroundColor:"black",
      height:"80%",
      padding:10,
    },
    middletext:{
      color:"white",
      fontSize:14,
      textAlign:'justify',
    },
    footer:{
      backgroundColor:"red",
      height:"10%",
      

    },
    
    footerbutton:{
      color:"white",
      fontSize:20,
      textAlign:'right',
      marginEnd:17,
      marginTop:25,
      
    },
    img:{
      height:55,
      width:55,
    },
});



export default App; 

