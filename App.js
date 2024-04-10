import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ImageBackground, ScrollView, Button, Alert} from 'react-native';
const logoImg=require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground source={logoImg} style={styles.background}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.firstview}>
         <Text style={styles.text}>First View</Text>
      </View>
      <View style={styles.secondview}>
        <Text style={styles.text}>Second View</Text>
      </View>
      <Image source={logoImg} style={styles.logo}/>
      <Image source={{uri:"https://picsum.photos/200"}} style={styles.logo}/>
      <Button title='press' 
      onPress={()=>console.log("button press")}
      color='midnightblue'
      />
      </ImageBackground>
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
