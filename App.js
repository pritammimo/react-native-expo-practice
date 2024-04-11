// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image,ImageBackground, ScrollView, Button, Pressable, Modal,StatusBar, ActivityIndicator, Alert} from 'react-native';
const logoImg=require("./assets/adaptive-icon.png");
export default function App() {
  const [modalopen, setmodalopen] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor='lightgreen' barStyle='light-content' />
      {/* <ActivityIndicator size="large" color="midnightblue" /> */}
      <ScrollView>
      <ImageBackground source={logoImg} style={styles.background}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
      <Pressable onPress={()=>console.log("on Press")}>
      <View style={styles.firstview}>
         <Text style={styles.text}>First View</Text>
      </View>
      <Button title='alert'
      onPress={()=>Alert.alert("alert","alert message",[
        {
          text:"cancel",
          onPress:()=>console.log("cancel")
        },
        {
          text:"ok",
          onPress:()=>console.log("ok")
        }
      ])}
      color='midnightblue'
      />
      </Pressable>
      <Pressable onPressIn={()=>console.log("in")} onPressOut={()=>console.log("out")}>
      <View style={styles.secondview}>
        <Text style={styles.text}>Second View</Text>
      </View>
      </Pressable>
      
      <Image source={logoImg} style={styles.logo}/>
      <Image source={{uri:"https://picsum.photos/200"}} style={styles.logo}/>
      <Button title='press' 
      onPress={()=>console.log("button press")}
      color='midnightblue'
      />
      </ImageBackground>
      <Button title='open modal' onPress={()=>setmodalopen(!modalopen)}/>
      <Modal visible={modalopen} 
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={()=>setmodalopen(false)}
      >
      <View style={styles.secondview}>
        <Text style={styles.text}>Modal View</Text>
        <Button title='close'
      color='midnightblue'
      onPress={()=>setmodalopen(!modalopen)}
      />
      </View>
      </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width:200,
    backgroundColor:"green",
    height:200,
  },
  secondview:{
    width:200,
    backgroundColor:"red",
    height:200,
  },
  text:{
    color:"white",
  }
});
