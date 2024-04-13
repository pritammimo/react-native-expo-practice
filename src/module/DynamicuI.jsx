
import { StyleSheet, Text, View,Dimensions,useWindowDimensions, SafeAreaView,Platform} from 'react-native'

import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function DynamicuI() {
    const Windowwidth = useWindowDimensions().width;
const height = useWindowDimensions().height;
console.log(Platform.OS)
  return (
    <SafeAreaView style={styles.safecontainer}>
        <StatusBar backgroundColor='lightgreen' barStyle='light-content'/>
        <View>
        <Text style={styles.text2}>Welcome</Text>
        </View>
        
        
    {/* <View style={styles.container}> 
    <StatusBar style='auto'/>
    <View style={[styles.box,{
        width:Windowwidth>500?"50%":"30%",
        height:height>600?"40%":"30%",
    }
    ]}>
    <Text style={{fontSize:Windowwidth>500?50:30}}>DynamicuI</Text>
    </View>

    </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    text2: {
        ...Platform.select({
          ios: {
            color: "purple",
            fontSize: 24,
            fontStyle: "italic",
          },
          android: {
            color: "blue",
            fontSize: 30,
          },
        }),
        fontWeight: "bold",
        textAlign: "center",
      },
    safecontainer:{
        flex:1,
        paddingTop:Platform.OS ==="android" ? 50:10,
        backgroundColor:"plum",
        alignItems: 'center',
        //justifyContent: 'center',
    },
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