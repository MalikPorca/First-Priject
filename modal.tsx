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

<View >
    <ImageBackground
    source={props.nesto}
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
          
         
          
        
           footerbutton:{
            width:100,
            marginLeft:133,
            marginBottom:270
             
           },
           

     })

     export default CriptoValute;