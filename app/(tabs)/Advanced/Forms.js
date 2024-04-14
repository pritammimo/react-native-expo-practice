import { SafeAreaView, StyleSheet, Text, View,TextInput, Switch, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Forms() {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");
    const [confirm, setconfirm] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
         <Text>Email</Text>
         <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS==="ios"?100:0}>
      <TextInput style={styles.input} 
      value={name} onChangeText={setname} placeholder='email@example.com'/>
      <Text>Password</Text>
       <TextInput style={styles.input} 
      value={password} onChangeText={setpassword} placeholder='password' 
      secureTextEntry 
      keyboardType='numeric'
      />
      <Text>Message</Text>
       <TextInput style={[styles.input,styles.multiline]} 
      value={message} onChangeText={setmessage} placeholder='message'
      multiline={true}
      />
      <Text>{name}</Text>
      <View style={styles.switchmode}>
      <Text style={{fontSize:24}}>Are you sure</Text>
      <Switch value={confirm} onChange={()=>setconfirm(!confirm)}
      trackColor={{false:"black",true:"blue"}}
      thumbColor={confirm?"white":"black"}
      />
        
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"plum",
        paddingTop:StatusBar.currentHeight
    },
    input:{
        borderWidth:2,
        height:30,
    },
    multiline:{
        minHeight:100,
        textAlignVertical:'top'
    },
    switchmode:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between"
    }
})