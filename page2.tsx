import React, { Component } from 'react';
import {  StyleSheet, Text, View  } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function ReadPage ({navigation})  {

    return(
      <View style={styles.middle}>
        <Text style={styles.text}>
          Uredi odabrani task!!! 
        </Text>
        <Text style={styles.text}>
          Uredi odabrani task!!! 
        </Text>
        <Text style={styles.text}>
          Uredi odabrani task!!! 
        </Text>
        <Text style={styles.text}>
          Uredi odabrani task!!! 
        </Text>
        <Text style={styles.text}>
          Uredi odabrani task!!! 
        </Text>
        <Text style={styles.text}>
          Uredi odabrani task!!! 
        </Text>
  
      </View>
  
  )
  }

  const styles = StyleSheet.create({
    text:{
        backgroundColor: 'red',
        color: "white",
        fontSize:18,
         
        margin: 15,
        width: 299, 
        height: 30, 
        flex:1,
        textAlign: "center" , 
        alignItems:"center" ,
        flexDirection:'row'
      },
      middle:{
        backgroundColor:"black",
        height:"100%",
        padding:10,
  }
});