import { Slot } from 'expo-router';
import { Tabs } from 'expo-router/tabs';
import { FontAwesome,MaterialIcons,Ionicons,Feather} from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// export default function HomeLayout() {
//   return <Slot />;
// }
export default function HomeLayout() {
    return (
    <Tabs>
       <Tabs.Screen name="index" options={{ title: 'Home',tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> , href:null}} /> 
      <Tabs.Screen name="Basic" options={{ title: 'Basic',tabBarIcon: ({ color }) => <Ionicons size={28} name="logo-web-component" color={color} />,headerShown:false }} />
      <Tabs.Screen name="Advanced" options={{ title: 'Advanced',tabBarIcon: ({ color }) => <MaterialIcons name="dynamic-feed" size={28} color={color}/>,headerShown:false }} />
    </Tabs>
  );
}
