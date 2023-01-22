import React, { Component } from 'react';
import { SafeAreaView,Image, StyleSheet, Button, TextInput, Text, View, ScrollView, RefreshControl, TouchableOpacity, ToastAndroid, Pressable, Alert, Modal, ImageBackground  } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
// import { setTextRange } from 'typescript';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function CriptoValute (props) {
const[showCripto, setShowCripto]= React.useState(false);

return(


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
          onPress={props.showCriptoPage}
          >
            <Text style={styles.footerbutton}>
              cancel
            </Text>
          </Pressable>
          </View>
        </View>
       
        </View>
        </View>
      
      );
     }
     const styles = StyleSheet.create({
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

     })

     export default CriptoValute;