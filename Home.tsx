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
const  [Posts, setPosts] = React.useState (false)


let [item, setItem] = React.useState("");  
const  [itemList, setItemList] = React.useState ([]);

const  [storyList, setStoryList] = React.useState([]);
const  [storyText, OnChangeStoryText] = React.useState ("");

let [Post, setPost] = React.useState("");  
const  [PostList, setPostList] = React.useState ([]);

const [image, setImage] = React.useState(null);
const [storyImage, setStoryImage] = React.useState([]);

const onPressFunction1 = (index) =>setClick(!click)

const bubbleModal =()=>setClick2(!click2)

const InsertImage=()=> setInput(!Input)

const insertPost = ()=>setPosts(!Posts)

//--------------------dodavanje bubble-------------------------

  const addNewbubble =(item)=>{
     itemList.push(item)
      setItem(item)
  }

  //------------------dodavanje story---------------------------
  function addNewStory(){
    let unos = storyText
    if(unos!="" && image!=null){storyList.push(unos)
      setInput(!Input)
      OnChangeStoryText(" ")} else{
        alert("Niste unijeli tekst ili sliku...")       
      }
 }
//------------------dodavanje texta------------------------------
const addPost =()=>{
    // PostList.push(Post)
    setPostList([...PostList, Post])
    setPosts(!Posts)
    setPost("")
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

 
{/*----------------------DODAVANJE bubble-SA-----------------------  */}
return(

  <SafeAreaView>
      <ScrollView horizontal={true} style={[{height:110,width:"94%",marginLeft:"3%",borderRadius:10, backgroundColor:"white", borderBottomWidth:3, borderColor:"#dddddd90",}]}>
       
        <Pressable onPress ={addNewbubble}>
          <ImageBackground style={styles.Imagebubble} source={require("./assets/fokus.png")}>
             <Text style={[{fontSize:20, color:"white", textAlign:"center", margin:9,}]}></Text>
          </ImageBackground>
        </Pressable>

           {itemList.map((item, index)=>(
            <Pressable onPress ={bubbleModal} key={index}>
               <Text style={styles.booble} key= {index}></Text>
            </Pressable>))}
      </ScrollView>

{/*----------------------DODAVANJE STORY-JA--------------------------  */}
       
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
            {storyText}
            { <Image key={index} source={{uri: image }} style={{width:90, height:100,}}/>}
            </Text>
            </Pressable>
            ))}
    
      </ScrollView>
      </View>
      
{/*----------------------DODAVANJE POSTOVA------------------------------  */}

      <View style={styles.middle}>
    
        <Text style={styles.addtext}>
          <Pressable onPress={insertPost}>
            <Text style={[{color:"blue", fontSize:25, fontWeight:"bold", backgroundColor:"#ddddddff", borderRadius:10,marginLeft:2, marginRight:2,}]} >
              Add    
            </Text>
          </Pressable>
        </Text>
        
        {PostList.map((Post, index)=>(
          <Text style={styles.text}  key={index}>{Post}</Text>
        ))}

      </View>

      </View>
      </ScrollView>
    
      <Modal visible={click}>
          <ImageBackground style={styles.bcgImage} source={{uri: image }}></ImageBackground>
         <Text style={[{ color:"black", fontSize:22, textAlign:"center", backgroundColor:"#5050ff"}]} key={1}>{storyList} </Text>
         <CriptoValute cancel={onPressFunction1}/>
      </Modal> 
    

      <Modal visible={click2}>
          <ImageBackground style={styles.bcgImage} source={require("./assets/predavanje3.jpg")}></ImageBackground>
         <CriptoValute cancel={bubbleModal}/>
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


        <Modal visible={Posts} style={styles.inputPost}>
          <View >
            <TextInput
            multiline={true}
            style={styles.InputText}
            placeholder={"   O cemu razmisljate: "}
            defaultValue={Post}
            onChange={(e) => setPost(e.nativeEvent.text)}/> 
          </View>
          <View style={[{flexDirection:"row", justifyContent:"space-between"}]}>

          <Pressable ><Text style={styles.spremi}>Slika</Text></Pressable>
          <Pressable  onPress={addPost}><Text style={styles.spremi}>Spremi</Text></Pressable>
          </View>
        </Modal>
      </SafeAreaView>
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
      Imagebubble:{
        
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