
import React, { Component } from 'react';
import { SafeAreaView,Image, StyleSheet, Button, TextInput, Text, View, ScrollView, RefreshControl, TouchableOpacity, ToastAndroid, Pressable, Alert, Modal, ImageBackground  } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';


const Input = () => {
  let [text, onChangeText] = React.useState("");
   let [toDoList, setToDoList] = React.useState<string[]>([]);
   let [edit, onChangeEdit] = React.useState(false);
   const [refresh, setRefresh]= React.useState(false);
   let [pressed, setPressed]= React.useState(false);
   const[showCripto, setShowCripto]= React.useState(false);
   //Dodoavanje elemenata u listu
   function submit  (){
    if(text.length<=3)Alert.alert("Greška","Morate unijet vise od 3 znaka!", [{text:"ok"}])
     else toDoList.push(text)
  if(text==" ")ToastAndroid.show("Empty task, please write something",ToastAndroid.SHORT) 
   else null
 onChangeText(" ");
 setPressed(!pressed);
    
  }
   
   const showCriptoPage=()=>{
    setShowCripto(!showCripto)
   }


    const showEdit=(nativeEvent)=>{
     onChangeEdit(edit!=edit)
    }
//Brisaje cijele liste
    const clearAll=(i:number)=>setToDoList([])

//brisajne pojedinih elemenata iz liste
    const deleteItem=(index)=>setToDoList(toDoList.filter((_,i)=>i!==index))

    const Refresh =()=>{
      setRefresh(true);
      setToDoList([]) ;
       
      setRefresh(false);
    }
    
  return (
    <ImageBackground
    source={require ("./assets/backgroundImage.jpg")}
    style={styles.backgroundImage}
    >
    <SafeAreaView style={styles.body}>

      <Modal
      
      transparent={true}
      visible={showCripto} 
      onRequestClose={()=>setShowCripto(false)}
      >
        <View style={[{backgroundColor:"#00000029"}]}>
          <View style={styles.kripto}>
            <ImageBackground
            style={styles.bcgImage}
            source={require("./assets/pozadina.jpg")}
            
            >
        
         <Text style={styles.headertext}>Kripto valute</Text>
      
        </ImageBackground>
        <ScrollView 
        fadingEdgeLength={300}

        >
        <View style={styles.middle}>
        <Text style={styles.middletext}>Kroz dugu historiju ljudske zajednice novac je poprimio različite forme, a kriptovalute su njegovo najnovije izdanje. Ovaj rad ima za cilj predstaviti kriptovalute, kako one funkcioniraju, koje su njihove prednosti i nedostaci i kako ih islamsko pravo tretira.
Za razumijevanje suštine kriptovaluta neophodno je shvatiti nekoliko ključnih termina, kao što su blockchain, privatni ključevi, elektronski novčanici, rudarenje i sl..
Jedan dio islamskih učenjaka, stanovišta je da je novac ekskluzivan naziv za zlato i srebro. Kovanice od drugih metala mimo zlata i srebra, čija je nominalna vrijednost veća od stvarne, ova skupina ne smatra novcem i tretira ih robom. Drugi dio učenjaka novcem naziva sve što se koristi kao platno sredstvo pri razmjeni dobara, radilo se o zlatu, srebru, bakru, papiru ili bilo čemu drugom ukoliko bude opće prihvaćeno kao platno sredstvo.
Islamski učenjaci jednoglasni su u stavu da je kovanje novca mimo legitimne državne kovaonice zabranjeno ukoliko predstavlja stvarnu i realnu štetu po zajednicu, a kada je šteta moguća, ali nije stvarna, islamski učenjaci po pitanju izdavanja i štampanja novca od strane drugih, mimo vlasti imaju dva oprečna mišljenja.
Većina savremenih učenjaka stanovišta je da su kriptovalute, poput Bitcoina, zabranjene, znatan dio njih ostao je suzdržan, a manji dio učenjaka smatra kriptovalute dozvoljenim, uz određene uvjete.
Osnovni argumenti zabrane su činjenica da kriptovalute ne izdaje i ne regulira država, obavijene su velom nepoznanica, 
pospješuju nelegalne aktivnosti i crno tržište, nestabilne su i ophođenje njima liči hazardu i kocki. Dozvola kriptovaluta bazira se na univerzalnom pravilu da je svaka stvar u osnovi dozvoljena sve dok validan argument ne potvrdi suprotno te činjenici da su one postale vrijedna imovina i da obavljaju funkciju novca.
        </Text>
        </View>
        </ScrollView>
        <View style={styles.footer}>
       
      
          <View>
          <Pressable
          onPress={showCriptoPage}
          >
            <Text style={styles.footerbutton}>
              cancel
            </Text>
          </Pressable>
          </View>
        </View>
       
        </View>
        </View>
      </Modal>
     
      <ScrollView
      refreshControl={<RefreshControl
      refreshing={refresh}
      onRefresh={Refresh}
      
      />}
      
      >
      <TextInput
       style={styles.input}
       defaultValue={text}
       onChange={(e) => onChangeText(e.nativeEvent.text)}/>  
       {edit &&(
       <View>
        
       <Button
       title='edit'
       color={"#d40202"}
       onPress={submit}
       /></View>
       )}    
        <Button
          title={!pressed? "O kripto valutama..." : "Oh.. hajde ponovo : )"}
          color={"#d40202"}
          onPress ={showCriptoPage}/> 

         
        
          {toDoList.map((text, index)=>(
      <View style={styles.text} key={index} >   
        <Text style={styles.text} key={index} >
          {text+"             "}
        </Text> 

        <View style={styles.button}>
         <Button 
           key={index}
           title='X'
           color={"#e60404"} 
            //onPress={(parameter)=>{}}
           onPress={()=>deleteItem(index)}/>
</View>
<View style={styles.button}>
          <Button 
           key={index}
           title='Edit'
           color={"#e60404"} 
           onPress={()=>showEdit(text)}/>
        </View>
      
      </View>
     ))}
  
      <View style={styles.ClearButton}>
       <Button
          title='                                  Clear                                  '
          color={"#800000"}
          onPress={()=>clearAll(1)}          
          />
      </View>

     
      </ScrollView>
      <View>
      <Pressable
       onPress ={submit}
       hitSlop={3}>
            <Text style={styles.plus}>
              +
            </Text>
          </Pressable>
      </View>
     
    </SafeAreaView> 
    </ImageBackground>      
  );
};

const styles = StyleSheet.create({
  backgroundImage:{
    height:"100%"
  },
 body: {
  marginTop:40,
  margin: 20,
  marginBottom:80,  
  // backgroundColor:"#D3D3D3",
  borderRadius:20,
  shadowOpacity:20,
  shadowColor:"black",
 },
 
 text:{
  backgroundColor: 'black',
  color: "white",
  fontSize:18,
  marginLeft:10,  
  margin: 10,
  width: 299, 
  height: 30, 
  flex:11,
  textAlign: "center" , 
  alignItems:"center" ,
  flexDirection:'row'
},
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
  input: {
    height: 50,
    margin: 12,
    marginTop: 35,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    color:"white",
    fontSize:22,
    backgroundColor:"#450",

  },
    button: {
      textAlign: "center" , 
      alignItems:"center" ,  
     marginLeft:2,
      
    },
    ClearButton: {
      textAlign: "center" , 
      alignItems:"center" ,
      margin:20,
      marginLeft:21,        
    },
    kripto:{
     backgroundColor:"black",
     height:650,
     width:300,
      margin:30,
     
     },
    
    bcgImage:{
      width:"100%",
    
    
    },
    headertext:{
      color:"white",
      fontSize:30,
      padding:15,
     
    },
    middle:{
      backgroundColor:"black",
      height:"80%",
      padding:10,
    },
    middletext:{
      color:"white",
      fontSize:14,
      textAlign:'justify',
    },
    footer:{
      backgroundColor:"red",
      height:"10%",
      

    },
    
    footerbutton:{
      color:"white",
      fontSize:20,
      textAlign:'right',
      marginEnd:17,
      marginTop:25,
      
    },
    img:{
      height:55,
      width:55,
    },
});



export default Input; 

