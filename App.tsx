
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Button, TextInput, Text, View, Pressable, SectionList, ImageBackground,  } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { setTextRange } from 'typescript';


const Input = () => {
  const [text, onChangeText] = React.useState("");
   let [toDoList, setToDoList] = React.useState<string[]>([]);
//Dodoavanje elemenata u listu
   function submit  (){
     toDoList.push(text)
     if(text=="")console.error("Empty task, please write something")
    onChangeText("")
    }
//Brisaje cijele liste
    const clearAll=(i:number)=>setToDoList([])
     
//brisajne pojedinih elemenata iz liste
    const deleteItem=(index)=>setToDoList(toDoList.filter((_,i)=>i!==index))
    
  return (
    
    <SafeAreaView style={styles.body}>
      
      <TextInput
       style={styles.input}
       defaultValue={text}
       onChange={(e) => onChangeText(e.nativeEvent.text)}/>      
        <Button
          title="Submit"
          color={"#d40202"}
          onPress ={submit}/> 
        
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
      
      </View>
     ))}
  
      <View style={styles.ClearButton}>
       <Button
          title='                                  Clear                                  '
          color={"#800000"}
          onPress={()=>clearAll(1)}          
          />
      </View>
    </SafeAreaView>       
  );
};

const styles = StyleSheet.create({
 body: {
  marginTop:40,
  margin: 20,  
  backgroundColor:"#fd0000",
  borderRadius:20,
  shadowOpacity:20,
  shadowColor:"black",
 },
 
 text:{
  backgroundColor: 'black',
  color: "white",
  fontSize:18,
  marginLeft:10,  
  margin: 22,
  width: 295, 
  height: 30, 
  flex:10,
  textAlign: "center" , 
  alignItems:"center" ,
  justifyContent:'space-between', 
  flexDirection:'row'
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
      flex:1,
      textAlign: "center" , 
      alignItems:"center" ,
      justifyContent:'space-between', 
      flexDirection:'row',       
      
    },
    ClearButton: {
      textAlign: "center" , 
      alignItems:"center" ,
      margin:20,
      marginLeft:21,        
    },
});



export default Input; 

