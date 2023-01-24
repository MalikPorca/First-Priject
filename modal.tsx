import React, { Component } from 'react';
import { SafeAreaView,Image, StyleSheet, Button, TextInput, Text, View, ScrollView, RefreshControl, TouchableOpacity, ToastAndroid, Pressable, Alert, Modal, ImageBackground  } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function CriptoValute (props) {
const[showCripto, setShowCripto]= React.useState(false);
const cancel = ()=> setShowCripto(!showCripto)
return(

<View style={styles.middle}>
    <ImageBackground
    style={styles.bcgImage}
    source={require("./assets/predavanje1.jpg")}
    >
    </ImageBackground>
    <View style={styles.footerbutton}>
    <Button 
    title='OK'
    onPress={props.cancel}
    />
    </View>
    </View>
      );
     }
     const styles = StyleSheet.create({
          
           bcgImage:{
             width:280,
             height:380,
             margin:40
           
           
           },
         
           middle:{
             backgroundColor:"#00000090",
             height:"100%"
             
           },
        
           footerbutton:{
            width:100,
            marginLeft:133
             
           },
           

     })

     export default CriptoValute;