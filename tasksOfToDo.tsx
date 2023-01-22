import React, { Component } from 'react';
import { SafeAreaView,Image, StyleSheet, Button, TextInput, Text, View, ScrollView, RefreshControl, TouchableOpacity, ToastAndroid, Pressable, Alert, Modal, ImageBackground  } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MalikButton from './CustomButton';


function Taskovi (props){

    let [text, onChangeText] = React.useState("");
   let [toDoList, setToDoList] = React.useState<string[]>([]);
   let [edit, onChangeEdit] = React.useState(false);
   const [refresh, setRefresh]= React.useState(false);
   let [pressed, setPressed]= React.useState(false);
   const[showCripto, setShowCripto]= React.useState(false);

return(
    <ScrollView
    refreshControl={<RefreshControl
    refreshing={props.refresh}
    onRefresh={props.onRefresh}
    />}
    
    >
    <TextInput
     style={styles.input}
     defaultValue={text}
     onChange={props.onChange3}/>  
     {edit &&(
     <View>
      
     <Button
     title='edit'
     color={"#d40202"}
     onPress={props.submit}
     /></View>
     )}    
       <Button
        title={!pressed? "O kripto valutama..." : "Oh.. hajde ponovo : )"}
        color={"#d40202"}
        onPress ={props.showCriptoPage}/>  

       
      
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
         onPress={()=>props.deleteItem(index)}/>
</View>
<View style={styles.button}>
        <Button 
         key={index}
         title='Edit'
         color={"#e60404"} 
         onPress={props.showEdit}/>
      </View>
    
    </View>
   ))}

    <View style={styles.ClearButton}>
     <Button
        title='                                  Clear                                  '
        color={"#800000"}
        onPress={()=>props.clearAll(1)}          
        />
    </View>

    </ScrollView>

)
}

const styles = StyleSheet.create({
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
})

export default Taskovi