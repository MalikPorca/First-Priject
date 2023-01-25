import React, { Component } from 'react';
import {  Pressable, SafeAreaView,ImageBackground, StyleSheet, Text, View  } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CriptoValute from './modal';
import { Modal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function ReadPage2 ({navigation}, props)  {
const  [click, setClick] = React.useState (false)

let [item, setItem] = React.useState("");  
const  [itemList, setItemList] = React.useState ([]);

let [story, setStory] = React.useState("");  
const  [storyList, setStoryList] = React.useState ([]);

let [Post, setPost] = React.useState("");  
const  [PostList, setPostList] = React.useState ([]);

//--------------------dodavanje bouble-------------------------
  const onPressFunction1 = () =>{
      setClick(!click)
      
  }

  const addNewBouble =(item)=>{
     itemList.push(item)
      setItem(item)
  }

  //------------------dodavanje story---------------------------
  const addNewStory =(story)=>{
    storyList.push(story)
     setStory(story)
 }
//------------------dodavanje texta------------------------------
const addPost =(Post)=>{
  PostList.push(Post)
   setPost(Post)
}

    return(

      <SafeAreaView>
        
{/*----------------------DODAVANJE BOUBLE-SA-----------------------  */}
        
        <ScrollView horizontal={true} style={[{height:110, backgroundColor:"white", borderBottomWidth:3, borderColor:"#dddddd90",}]}>
       
       

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
            <Pressable onPress ={onPressFunction1}
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
         <Pressable onPress={addNewStory}>
        <Text style={styles.blocktext}>
          +
        </Text>
        </Pressable>
            {storyList.map((story, index)=>(
              <Pressable onPress={onPressFunction1}>
        <Text style={styles.blocktext} key={index}><ImageBackground
            style={styles.ImageStory}
            source={require("./assets/predavanje2.jpg")} 
            ></ImageBackground>
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
          <Text style={styles.text}  key={index}> </Text>
        ))}

      </View>

      </View>
      </ScrollView>
    
      <Modal    
        transparent={false}
        visible={click} 
        >
          <ImageBackground 
        style={styles.bcgImage}
        source={require("./assets/predavanje3.jpg")}>
          
         </ImageBackground>
         <CriptoValute
            cancel={onPressFunction1}/>
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
      addtext:{
       
          backgroundColor: '#fff',
          color: "white",
          fontSize:18,
          padding:7,
          marginBottom: 10,
          width: "100%", 
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
        borderRadius:20,
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
      width:0,
      },
      blocktext:{
        backgroundColor:"#dddddd",
        borderRadius:10,
        fontSize:72,
        textAlign:"center",
       
        color:"blue",
        height:110,
        width:92,
        margin:10,
      },
    
});