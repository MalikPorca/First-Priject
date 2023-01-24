import React, { Component } from 'react';
import {  StyleSheet, Text, View, ScrollView  } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ReadPage ({navigation})  {

    return(
      <SafeAreaView style={styles.middle}>
        <View style={[{height:39, }]}>
          <Text style={[{color:"black", fontSize:25, fontWeight:"bold" }]}>Ove sedmice ne zaboravite...</Text>
        </View>
      <ScrollView >

        <Text style={styles.text}>
         NOVOSTI
        </Text>
        <Text style={styles.text}>
         NOVOSTI
        </Text>
        <Text style={styles.text}>
         NOVOSTI
        </Text>
        <Text style={styles.text}>
         NOVOSTI
        </Text>
        <Text style={styles.text}>
         NOVOSTI
        </Text>
  
      </ScrollView>
      </SafeAreaView>
  )
  }

  const styles = StyleSheet.create({
    text:{
        backgroundColor: '#fff',
        color: "black",
        fontSize:18,
        padding:20,
        margin: 18,
        width: 299, 
        height: 150, 
        flex:1,
        borderRadius:20,
        textAlign: "center" , 
        alignItems:"center" ,
        flexDirection:'row'
        
      },
      middle:{
        backgroundColor:"#dddddd00",
        height:"100%",
        padding:10,
  }
});