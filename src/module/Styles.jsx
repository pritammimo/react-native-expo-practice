import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Stylesmodule () {
  return (
    <View style={styles.container}>
      <Text>Styles</Text>
      <View style={[styles.boxmodel,styles.secondview]}>
        <Text>Red Box Model design</Text>
      </View>
      <View style={[styles.boxmodel,styles.firstview]}>
        <Text>Green Box Model design</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    boxmodel:{
        width:"100",
        height:"100",
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
    text:{
      color:"white",
    }
  });

