import React, { Component } from 'react';
import {  StyleSheet, Text, View  } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ReadPage2 ({navigation})  {

    return(
      <View style={styles.middle}>
        <Text style={styles.text}>
          Dobro dosli!!! 
        </Text>
        <Text style={styles.text}>
          Dobro dosli!!! 
        </Text>
        <Text style={styles.text}>
          Dobro dosli!!! 
        </Text>
        <Text style={styles.text}>
          Dobro dosli!!! 
        </Text>
  
      </View>
  
  )
  }

  const styles = StyleSheet.create({
    text:{
        backgroundColor: 'black',
        color: "white",
        fontSize:18,
        marginLeft:10,  
        margin: 10,
        width: "94%", 
        height: 30, 
        flex:11,
        textAlign: "center" , 
        alignItems:"center" ,
        flexDirection:'row'
      },
      middle:{
        backgroundColor:"blue",
        height:"100%",
        padding:10,
  }
});