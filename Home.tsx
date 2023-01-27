import React, { useState, useEffect } from 'react';
import {  Pressable, SafeAreaView,ImageBackground,Image,Platform, StyleSheet, Text, View ,Button,} from "react-native";
import StickyItemFlatList from '@gorhom/sticky-item';
import CriptoValute from './modal';
import {  Modal } from 'react-native-paper';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function Home ({navigation}, props)  {
const  [click, setClick] = React.useState (false)
const  [click2, setClick2] = React.useState (false)
const  [Input, setInput] = React.useState (false)


let [item, setItem] = React.useState("");  
const  [itemList, setItemList] = React.useState ([]);

const  [storyList, setStoryList] = React.useState([]);
const  [storyText, OnChangeStoryText] = React.useState ("");

let [Post, setPost] = React.useState("");  
const  [PostList, setPostList] = React.useState ([]);

const [image, setImage] = React.useState(null);
const [storyImage, setStoryImage] = React.useState([]);

//--------------------dodavanje bouble-------------------------
  const onPressFunction1 = () =>{
      setClick(!click)
      
  }
  const bubleModal =()=>{
    setClick2(!click2)
  }

  const InsertImage=()=> setInput(!Input)

  const addNewBouble =(item)=>{
     itemList.push(item)
      setItem(item)
  }

  //------------------dodavanje story---------------------------
  function addNewStory(){
    let unos = storyText
    storyList.push(unos)
    setInput(!Input)
    OnChangeStoryText(" ")
   
 }
//------------------dodavanje texta------------------------------
const addPost =(Post)=>{
  PostList.push(Post)
   setPost(Post)
}


const izaberi = async ()=>{
let result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: true,
  aspect: [4,8],
  quality:1,
});
if (!result.canceled){
  setImage(result.assets[0].uri);
  setStoryImage(image)
  
}
};

    return(

      <SafeAreaView>
        
      
{/*----------------------DODAVANJE BOUBLE-SA-----------------------  */}
        
        <ScrollView horizontal={true} style={[{height:110,width:"94%",marginLeft:"3%",borderRadius:10, backgroundColor:"white", borderBottomWidth:3, borderColor:"#dddddd90",}]}>
       
       

        <Pressable onPress ={addNewBouble}>
        <ImageBackground
            style={styles.ImageBouble}
            source={require("./assets/fokus.png")} 
            >
        <Text style={[{fontSize:20, color:"white", textAlign:"center", margin:9,}]}>

        </Text>
        </ImageBackground>
           </Pressable>

           {itemList.map((item, index)=>(
            <Pressable onPress ={bubleModal}
          >
            <Text style={styles.booble} key= {index}>
            </Text></Pressable>

))}
   
{/*----------------------DODAVANJE STORY-JA--------------------------  */}

        </ScrollView>
        <ScrollView>
      <View style={styles.middle}>
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
            { <Image key={index} source={{uri: image }} style={{width:90, height:100,}}/>}
            </Text>
            </Pressable>
            ))}
    
      </ScrollView>
      </View>
{/*----------------------DODAVANJE POSTOVA------------------------------  */}

      <View style={styles.middle}>
    
        <Text style={styles.addtext}>
          <Pressable onPress={addPost}>
            <Text style={[{color:"blue", fontSize:25, fontWeight:"bold", backgroundColor:"#ddddddff", borderRadius:10,marginLeft:2, marginRight:2,}]} >
              Add    
            </Text>
          </Pressable>
        </Text>
        
        {PostList.map((Post, index)=>(
          <Text style={styles.text}  key={index}> <Image source={{uri: image }} style={{width:170, height:200}}/> </Text>
        ))}

      </View>

      </View>
      </ScrollView>
    
      <Modal    
        
        visible={click} 
        >
          <ImageBackground 
        style={styles.bcgImage}
        source={{uri: image }}>
          
         </ImageBackground>
         <CriptoValute
            cancel={onPressFunction1}/>
      </Modal> 

      <Modal    
        
        visible={click2} 
        >
          <ImageBackground 
        style={styles.bcgImage}
        source={require("./assets/predavanje3.jpg")}>
          
         </ImageBackground>
         <CriptoValute
            cancel={bubleModal}/>
      </Modal> 

      <Modal visible={Input} style={styles.inputPost}>
          <View >
            <TextInput
            style={styles.Input}
            placeholder={"   Današnja mudrost: "}
            defaultValue={storyText}
            onChange={(e) => OnChangeStoryText(e.nativeEvent.text)}/> 
          </View>
          <Button title='save' onPress={addNewStory}/>
          <Button title='izaberi sliku' onPress={izaberi}/>
        </Modal>
      </SafeAreaView>
  )
  }

  const styles = StyleSheet.create({
    text:{
        backgroundColor: '#fff',
        color: "white",
        fontSize:18,
        padding:7,
        marginBottom: 10,
        width: "100%", 
        height: 240, 
        borderRadius:10,
        textAlign: "center" , 
        alignItems:"center" ,
        flexDirection:'row',
        borderColor:"#dddddd90",
         borderBottomWidth:2,
          borderRightWidth:2,
          borderLeftWidth:2,
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
        height:300,
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        marginBottom:20,
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
      ImageBouble:{
        
        height:50,
        width:50,
        margin:10,
        marginTop:19
      },
      ImageStory:{
        height:110,
        width:92,
      },
     
      middle:{
        backgroundColor:"#dddddd00",
        height:"75%",
        padding:10,
        paddingTop:20,
        
  },
      boobles:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:"white",
        borderBottomWidth:3,
        borderColor:"#dddddd90",

        
      },
      bcgImage:{
        width:280,
        height:380,
        margin:40,
        
      
      
      },
      booble:{
        backgroundColor:"#dddddd30",
        borderRadius:100,
        fontSize:30,
        color:"white",
        height:50,
        width:50,
        margin:10,
        marginTop:20,
        marginBottom:20,
        textAlign:"center",
        padding:3,
        shadowColor:"#0000ff99",
        shadowOpacity:0.5,
        borderWidth:0.1,
        fontWeight:"bold",
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