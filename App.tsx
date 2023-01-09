
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Button, TextInput, Text, View, Pressable, SectionList,  } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { setTextRange } from 'typescript';
import CheckBox from '@react-native-community/checkbox';

const Input = () => {
  const [text, onChangeText] = React.useState("");
   const [text2, onChangeText2] = React.useState([]);

   function SubmmitANDClear  (){
     text2.push(text)
    onChangeText("")
    }

    function clearAll  (){
      text2.splice(text, 60)
      onChangeText(text + " ")
     }
    

    const del=(key)=>{
           text2.splice(text2[key], 1)
          onChangeText(text + " ")
      }
    
  return (
    <SafeAreaView style={{justifyContent:'space-between',flexDirection:'column',}}>
      <TextInput
        style={styles.input}
         defaultValue={text}
        onChange={(e) => onChangeText(e.nativeEvent.text)}
      />      
       <Button
       title="Submmit"
       color={"#f194ff"}
       onPress ={SubmmitANDClear}
       /> 
        
       {text2.map((task, i)=>(
         <Pressable style={styles.button}  >
          <CheckBox
              value={state.vue}
              onValueChange={value =>
                setState({
                  ...state,
                  vue: value,
                })
              }
            />
         <Text
         style={{backgroundColor: 'black',color: "white", borderColor: "black", borderWidth: 1,  marginTop: 25, width: 320, height: 50,  textAlign: "left" , paddingLeft:10, justifyContent:'space-between', flexDirection:'row',}}
         key={i}
         >
        {task+"             "}
       

        <Button 
        key={i}
        title='X'
        color={"red"} 
        onPress={del}
        ></Button>
        </Text> 
        
        </Pressable>
        
      ))}
      
        
 <Button
        title='Clear'
        onPress={clearAll}
        ></Button>
    </SafeAreaView>   
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    marginTop: 65,
    borderWidth: 1,
    padding: 10,
    borderRadius:20
  },
    button: {
      alignItems: 'center',
      justifyContent: 'flex-end',  
      position:'relative'
      
     
      
      
    },
});



export default Input; 

