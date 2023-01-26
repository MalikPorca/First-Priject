import React, { Component } from 'react';
import { StyleSheet, Button, View, ImageBackground  } from "react-native";




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