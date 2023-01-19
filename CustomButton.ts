import React from "react";
import {  Pressable, StyleSheet, Text } from "react-native";

const MalikButton = (props)=>{
return (
<Pressable
onPress ={props.onPressFunction} 
hitSlop={3}>
     <Text style={styles.plus}>
     +
     </Text>
   </Pressable>
)
}

const styles = StyleSheet.create({
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
})
export default MalikButton;