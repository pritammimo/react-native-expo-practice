import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Box from '../components/box';

export default function Stylesmodule () {
  return (
    <View style={styles.flexbox}>
        <Box children="green box" style={{backgroundColor:"green",alignSelf:"flex-start"}}/>
        <Box children="red box" style={{backgroundColor:"red",alignSelf:"flex-end"}}/>
        <Box children="yellow box" style={{backgroundColor:"yellow",alignSelf:"center",position:"absolute",top:100,left:100}}/>
        <Box children="orange box" style={{backgroundColor:"orange",flexshrink:1}}/>
        <Box children="blue box" style={{backgroundColor:"blue",flexshrink:1}}/>
       {/* <View style={styles.dark}>
         <Text style={styles.darkText}>Styles Inheritance</Text>
      </View>
     
      <View style={[styles.boxmodel,styles.secondview,styles.boxshadow]}>
        <Text>Red Box Model design</Text>
      </View>
      <View style={[styles.boxmodel,styles.firstview,styles.androidshadow]}>
        <Text>Green Box Model design</Text>
      // </View> */}
    </View>
  )
}
const styles = StyleSheet.create({
  flexbox:{
   borderColor:"red",
   borderWidth:6,
   flex:1,
   marginTop:15,
   //width:150,
  //  flexWrap:"wrap",
  //  height:300,
   gap:10,
   //flexDirection:"row",
   //justifyContent:"flex-end",
   //alignItems:"stretch"
  },
    boxmodel:{
        width:250,
        height:250,
        paddingHorizontal:10,
        marginHorizontal:10,
        marginHorizontal:20,
        paddingVertical:20,
        borderWidth:2,
        borderColor:"purple",
        borderRadius:10,
    },
    background:{
     flex:1,
    },
    logo:{
      width:200,
      height:200,
    },
    container: {
      flex: 1,
      backgroundColor: "plum",
      alignItems: 'center',
      justifyContent: 'center',
      padding:60
    },
    firstview:{
      backgroundColor:"green",
    },
    secondview:{
      backgroundColor:"red",
    },
    dark:{
      backgroundColor:"black",
    },
      darkText:{
      color:"white", // Inheritance from view to text not work,but inheritance from text to text work
    },
    boxshadow:{
      shadowColor:"#333333",
      shadowOffset:{
       width:6,
       height:6
      },
      shadowOpacity:0.5,
      shadowRadius:10,
    },
    androidshadow:{
      elevation:10, // this propertty only works in android
      shadowColor:"#333333",
    }
  });

