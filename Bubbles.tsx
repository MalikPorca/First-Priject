// import React, { useState, useEffect } from 'react';
// import {  Pressable, SafeAreaView,ImageBackground,Image,Platform, StyleSheet, Text, View ,Button,} from "react-native";
// import CriptoValute from './modal';
// import {  Modal } from 'react-native-paper';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';


// export function Bubbles (){
//     const  [click, setClick] = React.useState (false)
//     const  [click2, setClick2] = React.useState (false)
//     const bubbleModal =()=>setClick2(!click2)
    
// let [item, setItem] = React.useState("");  
// const  [itemList, setItemList] = React.useState ([]);
// const addNewbubble =(item)=>{
//     itemList.push(item)
//      setItem(item)
//  }

//     return(
//         <View>
//         <ScrollView horizontal={true} style={[{height:110,width:"94%",marginLeft:"3%",borderRadius:10, backgroundColor:"white", borderBottomWidth:3, borderColor:"#dddddd90",marginTop:"13%"}]}>
       
//         <Pressable onPress ={addNewbubble}>
//           <ImageBackground style={styles.Imagebubble} source={require("./assets/fokus.png")}>
//              <Text style={[{fontSize:20, color:"white", textAlign:"center", margin:9,}]}></Text>
//           </ImageBackground>
//         </Pressable>

//            {itemList.map((item, index)=>(
//             <Pressable onPress ={bubbleModal} key={index}>
//                <Text style={styles.booble} key= {index}></Text>
//             </Pressable>))}
//       </ScrollView>
//       <Modal visible={click2} style={[{marginTop:105}]}>
//       <ImageBackground style={styles.bcgImage} source={require("./assets/predavanje3.jpg")}></ImageBackground>
//      <CriptoValute cancel={bubbleModal}/>
//   </Modal>
//   </View>
//     )
// }
// const styles = StyleSheet.create({
//     Imagebubble:{
        
//         height:50,
//         width:50,
//         margin:10,
//         marginTop:19
//       },   
//       bcgImage:{
//         width:280,
//         height:380,
//         margin:40,
//       },
//       booble:{
//         backgroundColor:"#dddddd30",
//         borderRadius:100,
//         fontSize:30,
//         color:"white",
//         height:50,
//         width:50,
//         margin:10,
//         marginTop:20,
//         marginBottom:20,
//         textAlign:"center",
//         padding:3,
//         shadowColor:"#0000ff99",
//         shadowOpacity:0.5,
//         borderWidth:0.1,
//         fontWeight:"bold",
//       },
// })