import React, { useState, useEffect } from 'react';
import {  Pressable, SafeAreaView,ImageBackground,Image,Platform, StyleSheet, Text, View ,Button,} from "react-native";
import CriptoValute from './modal';
import {  Modal } from 'react-native-paper';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';


export function Story(){
    const  [Input, setInput] = React.useState (false)
    const  [storyList, setStoryList] = React.useState([]);
    const  [storyText, OnChangeStoryText] = React.useState ("");
    const  [click, setClick] = React.useState (false)
    const [image, setImage] = React.useState(null);
    const [storyImage, setStoryImage] = React.useState([]);
    const InsertImage=()=> setInput(!Input)
    const onPressFunction1 = (index) =>setClick(!click)

    function addNewStory(){
        let unos = storyText
        if(unos!="" && image!=null){storyList.push(unos)
          setInput(!Input)
          OnChangeStoryText(" ")} else{
            alert("Niste unijeli tekst ili sliku...")       
          }
     }

     const ChoosePhoto = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4,8],
          quality:1,
        });
        if (!result.canceled){
          setImage(result.assets[0].uri);
          setStoryImage(result.assets)
          }};
        
    return(
        <View>
        <ScrollView horizontal={true} style={[{height:150, backgroundColor:"white", borderRadius:10,padding:2, borderLeftWidth:2, marginBottom:10,borderColor:"#dddddd90", borderBottomWidth:2, borderRightWidth:2,}]}
        >
           <Pressable onPress={InsertImage}>
          <Text style={styles.blockPlus}>
            +
          </Text>
          </Pressable>
              {storyList.map((storyText, index)=>(
                <Pressable onPress={onPressFunction1} key={index}>
          <Text style={styles.blocktext} key={index}>
            {/* <ImageBackground
              style={styles.ImageStory}
              source={require("./assets/predavanje2.jpg")} 
              ></ImageBackground > */}
              {storyText}
              { <Image key={index} source={{uri: image }} style={{width:90, height:100,}}/>}
              </Text>
              </Pressable>
              ))}
      
        </ScrollView>
        <Modal visible={click}>
        <ImageBackground style={styles.bcgImage} source={{uri: image }}></ImageBackground>
       <Text style={[{ color:"black", fontSize:22, textAlign:"center", backgroundColor:"#5050ff"}]} key={1}>{storyList} </Text>
       <CriptoValute cancel={onPressFunction1}/>
    </Modal> 
  

    <Modal visible={Input} style={styles.inputPost}>
        <View >
          <TextInput
          numberOfLines={5}
          multiline={true}
          style={styles.Input}
          placeholder={"   Danasnji story: "}
          defaultValue={storyText}
          onChange={(e) => OnChangeStoryText(e.nativeEvent.text)}/> 
        </View>
        <View style={[{flexDirection:"row", justifyContent:"space-between"}]}>
        <Pressable  onPress={ChoosePhoto}><Text style={styles.slika}>Slika</Text></Pressable>
        <Pressable  onPress={addNewStory}><Text style={styles.spremi}>Spremi</Text></Pressable>
        </View>
      </Modal>
      </View>
    )
}
const styles = StyleSheet.create({
    text:{
        backgroundColor: '#fff',
        color: "black",
        fontSize:16,
        padding:9,
        marginBottom: 10,
        width: "100%", 
        height: 240, 
        borderRadius:10,
        textAlign:'justify' , 
        alignItems:"center" ,
        flexDirection:'row',
        borderColor:"#dddddd90",
         borderBottomWidth:2,
          borderRightWidth:2,
          borderLeftWidth:2,
      },
      spremi:{
        color:"blue",
        fontSize:18,
        marginRight:10,
      },
      slika:{
        color:"blue",
        fontSize:18,
        marginLeft:10
      },
      inputPost:{
        width:250,
        height:380,
        alignItems:"center",
        textAlign:"start",
        backgroundColor:"white",
        margin:55,
        borderRadius:10,
        
      },
      Input:{
        width:220,
        height:60,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"#ddddffaa",
        borderRadius:10,
        marginBottom:220,
        alignItems:"flex-start"
      },
      InputText:{
        width:220,
        height:60,
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        marginBottom:220,
        alignItems:"flex-start"
      },
      addtext:{
       
          backgroundColor: '#fff',
          color: "white",
          fontSize:18,
          padding:7,
          marginBottom: 10,
        
          height: 50, 
          borderRadius:10,
          textAlign: "left" , 
          alignItems:"center" ,
          flexDirection:'row',
          borderColor:"#dddddd90",
           borderBottomWidth:2,
            borderRightWidth:2,
            borderLeftWidth:2,
        
      },
     
      middle:{
        backgroundColor:"#dddddd00",
        height:"75%",
        padding:10,
        paddingTop:20,
        
  },
     
      bcgImage:{
        width:280,
        height:380,
        margin:40, 
      },
     
      blocks:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:"#dddddd",
      
      },
      blockPlus:{
        backgroundColor:"#dddddd",
        borderRadius:10,
        fontSize:72,
        textAlign:"center",
        color:"blue",
        height:110,
        width:92,
        margin:10,
      },
      blocktext:{
        backgroundColor:"#9595dd",
        alignContent:"center",
        alignItems:"flex-start",
        padding:2,
        borderRadius:10,
        fontSize:12,
        color:"white",
        height:110,
        width:92,
        margin:10,
      },
    
});