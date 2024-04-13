import { StyleSheet, Text, View,Dimensions,useWindowDimensions} from 'react-native'

import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function DynamicuI() {
    const Windowwidth = useWindowDimensions().width;
const height = useWindowDimensions().height;
console.log("height",height);
  return (
    <View style={styles.container}> 
    <StatusBar style='auto'/>
    <View style={[styles.box,{
        width:Windowwidth>500?"50%":"30%",
        height:height>600?"40%":"30%",
    }
    ]}>
    <Text style={{fontSize:Windowwidth>500?50:30}}>DynamicuI</Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "plum",
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        backgroundColor:"red",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
      color:"white",
    }
})